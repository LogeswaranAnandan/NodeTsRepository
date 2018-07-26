import { Service, Container, Inject } from 'typedi';
import { HttpUtil } from './HttpUtil';
import { Orders } from '../models/Orders';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { transformAndValidate } from 'class-transformer-validator'
import { OrderItems } from '../models/OrderItems';

@Service('orders.service')
export class OrdersService {
    count: number = 10;

    // @Inject('http.Util')
    // httpUtil: HttpUtil;

    constructor(@Inject('http.Util') private httpUtil: HttpUtil) {}

    async wcsRequest(orderId?: number) {
        var ORDER_URL;
        var GET_METHOD = 'GET';
        var ERR_INVALID_ORDER_ID = 'Invalid order Id';
        var orderItems = new Array();
        var orders: any;
        if (orderId != null) {
            ORDER_URL = `https://192.168.35.129/wcs/resources/store/10201/order/${orderId}`;
        } else {
            ORDER_URL = `https://192.168.35.129/wcs/resources/store/10201/order/26001`;
        }
        try {
            var orderJsonResponse = await this.httpUtil.makeHttpRequest(ORDER_URL, GET_METHOD); //productId = 12392, 11467, 12440
            if (orderJsonResponse.orderId == null) {
                throw ERR_INVALID_ORDER_ID;
            }
            for (var i = 0; orderJsonResponse.orderItem[i] != null; i++) {
                var productId = orderJsonResponse.orderItem[i].productId;
                const orderItemJsonResponse = await this.httpUtil.makeHttpRequest(`https://192.168.35.129/wcs/resources/store/10201/productview/byId/${productId}?catalogId=10052`, GET_METHOD);
                orderItems[i] = await this.convertToOrderItemsObject(orderItemJsonResponse.CatalogEntryView[0]);
            }
            orders = await this.convertToOrdersObject(orderJsonResponse);
            console.log(`----------------orderItems-------------`);
            console.log(orderItems);
            orders.setOrderItems(orderItems);
            console.log(`--------------sending response-----------`);
            console.log(orders);
            return orders;
            // var angularResponse = await this.constructResponse(orderJsonResponse, orderItems);
            // return angularResponse;
        } catch (err) {
            return 'Invalid Order Id';
        }
    }

    async constructResponse(orderResponse: any, productResponse: Array<any>) {
        var orderItems = new Array();
        for (var i = 0; productResponse[i] != null; i++) {
            orderItems[i] = {
                'name': productResponse[i].CatalogEntryView[0].name,
                'price': productResponse[i].CatalogEntryView[0].Price[0].priceValue,
                'shortDescription': productResponse[i].CatalogEntryView[0].shortDescription
            }
        }
        var angularResponse = {
            'orderId': orderResponse.orderId,
            'totalProductPrice': orderResponse.totalProductPrice,
            'discount': orderResponse.adjustment[0].amount,
            'grandTotal': orderResponse.grandTotal,
            'orderItems': orderItems
        }
        return await angularResponse;
    }

    async convertToOrdersObject(orderResponse: any) {
        var order = plainToClass(Orders, JSON.parse(JSON.stringify(orderResponse)));
        await validate(order, { whitelist: true });
        return order;
    }

    async convertToOrderItemsObject(productResponse: any) {
        var orderItem = plainToClass(OrderItems, JSON.parse(JSON.stringify(productResponse)));
        await validate(orderItem, { whitelist: true });
        return orderItem;
    }

    // incrementCount() {
    //     console.log('count = ' + this.count);
    //     this.count++;
    // }
}

// Container.bind('orders.service').to(OrdersService);