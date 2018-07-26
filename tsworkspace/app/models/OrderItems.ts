import { Allow, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Price } from "./Price";

export class OrderItems {
    @Allow()
    name: any;

    @Allow()
    shortDescription: any;

    @ValidateNested()
    @Type(() => Price)
    Price: Price[];

    constructor() {
        this.Price = new Array<Price>();
    }
}