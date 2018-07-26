import { Allow } from "class-validator";
import { Expose } from "class-transformer";

export class Adjustment {
    
    @Allow()
    amount: any;

    constructor() {

    }
}