import { Controller, Param, Get } from 'routing-controllers';
import { Container, Inject } from 'typedi';
import { OrdersService } from '../services/orders.service';

@Controller()
export class OrdersController {

    // @Inject('orders.service')
    // ordersService: OrdersService;

    constructor(@Inject('orders.service') private ordersService: OrdersService) {
    }

    // @Inject('orders.service') private ordersService;

    // constructor(ordersService: OrdersService) {
    //     this.ordersService = ordersService;
    // }

    // constructor(private ordersService: OrdersService) {
    //     this.ordersService = Container.get('orders.service');
    // }

    @Get('/orders')
    async wcsDefaultRequest() {
        return await this.ordersService.wcsRequest();
    }

    @Get('/orders/:orderId')
    async wcsOrderRequest(@Param('orderId') orderId: number) {
        return await this.ordersService.wcsRequest(orderId);
    }

    // @Get('/')
    // incrementCount() {
    //     this.ordersService.incrementCount();
    //     return 'success';
    // }
}