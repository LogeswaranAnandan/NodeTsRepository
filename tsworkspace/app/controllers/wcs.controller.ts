import { Router, Request, Response } from 'express';
import axios from 'axios';
import https from 'https';
// import fetch from 'node-fetch';
// Assign router to the express.Router() instance
const router: Router = Router();

router.get('/', wcsCallback);

async function makeRequest(url: any) {
    var agents = new https.Agent({
        host: '192.168.35.129',
        path: '/',
        rejectUnauthorized: false
    });
    try {
        const response = await axios.get(url, { httpsAgent: agents });
        const json = await response.data;
        console.log('-----------------json-------------------')
        return json;
    } catch (err) {
        console.log('---------------------err---------------------');
        console.log(err);
    }
};

async function wcsCallback(req: Request, res: Response) {
    const myUrl1 = 'https://192.168.35.129/wcs/resources/store/10201/order/26001';
    var productResponse = new Array();
    var orderResponse = await makeRequest(myUrl1);
    console.log('------------orderResponse--------');
    console.log(orderResponse); //productId = 12392, 11467, 12440
    console.log('-------------request completed-------------------');
    for (var i = 0; orderResponse.orderItem[i] != null; i++) {
        var productId = orderResponse.orderItem[i].productId;
        console.log(productId);
        productResponse[i] = await makeRequest(`https://192.168.35.129/wcs/resources/store/10201/productview/byId/${productId}?catalogId=10052`);
    }
    var angularResponse = await constructResponse(orderResponse, productResponse);
    res.send(angularResponse);
}



async function constructResponse(orderResponse: any, productResponse: any) {
    var orderItems = new Array();
    for(var i=0; productResponse[i] != null; i++) {
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
    console.log(angularResponse);
    return await angularResponse;
}

export const WcsController: Router = router;