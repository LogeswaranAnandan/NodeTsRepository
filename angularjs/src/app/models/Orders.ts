import {Adjustment} from './Adjustment';
import { Allow, ValidateNested } from 'class-validator';
import { Type, Exclude } from 'class-transformer';
import { OrderItems } from './OrderItems';

export class Orders {
    @Allow()
    orderId: any;

    @Allow()
    totalProductPrice: any;

    @Allow()
    grandTotal: any;

    @ValidateNested()
    @Type(() => Adjustment)
    adjustment: Adjustment[];

    // @Exclude()
    @Type(() => OrderItems)
    orderItems: OrderItems[];

    constructor() {
        this.adjustment = new Array<Adjustment>();
        this.orderItems = new Array<OrderItems>();
    }

    getOrderId() {
        return this.orderId;
    }

    setOrderItems(orderItems: OrderItems[]) {
        this.orderItems = orderItems;
    }

    // toString() {
    //     return `orderId = ${this.orderId} \n price = ${this.totalProductPrice}\n adjustment = ${this.adjustment}`;
    // }
}
