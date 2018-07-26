"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Adjustment_1 = require("./Adjustment");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var OrderItems_1 = require("./OrderItems");
var Orders = /** @class */ (function () {
    function Orders() {
        this.adjustment = new Array();
        this.orderItems = new Array();
    }
    Orders.prototype.getOrderId = function () {
        return this.orderId;
    };
    Orders.prototype.setOrderItems = function (orderItems) {
        this.orderItems = orderItems;
    };
    __decorate([
        class_validator_1.Allow(),
        __metadata("design:type", Object)
    ], Orders.prototype, "orderId", void 0);
    __decorate([
        class_validator_1.Allow(),
        __metadata("design:type", Object)
    ], Orders.prototype, "totalProductPrice", void 0);
    __decorate([
        class_validator_1.Allow(),
        __metadata("design:type", Object)
    ], Orders.prototype, "grandTotal", void 0);
    __decorate([
        class_validator_1.ValidateNested(),
        class_transformer_1.Type(function () { return Adjustment_1.Adjustment; }),
        __metadata("design:type", Array)
    ], Orders.prototype, "adjustment", void 0);
    __decorate([
        class_transformer_1.Type(function () { return OrderItems_1.OrderItems; }),
        __metadata("design:type", Array)
    ], Orders.prototype, "orderItems", void 0);
    return Orders;
}());
exports.Orders = Orders;
//# sourceMappingURL=Orders.js.map