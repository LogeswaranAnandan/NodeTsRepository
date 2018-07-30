import { Allow } from "class-validator";

export class Price {

    @Allow()
    priceValue: any;
    
}