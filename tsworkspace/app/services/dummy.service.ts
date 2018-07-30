import { Service, Inject } from "typedi";
import { OrdersService } from "./orders.service";

@Service()
export class DummyService {

    // @Inject('orders.service')
    ordersService: OrdersService;

    constructor(@Inject('orders.service') ordersService: OrdersService) {
        this.ordersService = ordersService;
    }

    newFunction() {
        console.log('inside new function');
    }
}