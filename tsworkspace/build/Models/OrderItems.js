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
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var Price_1 = require("./Price");
var OrderItems = /** @class */ (function () {
    function OrderItems() {
        this.Price = new Array();
    }
    __decorate([
        class_validator_1.Allow(),
        __metadata("design:type", Object)
    ], OrderItems.prototype, "name", void 0);
    __decorate([
        class_validator_1.Allow(),
        __metadata("design:type", Object)
    ], OrderItems.prototype, "shortDescription", void 0);
    __decorate([
        class_validator_1.ValidateNested(),
        class_transformer_1.Type(function () { return Price_1.Price; }),
        __metadata("design:type", Array)
    ], OrderItems.prototype, "Price", void 0);
    return OrderItems;
}());
exports.OrderItems = OrderItems;
//# sourceMappingURL=OrderItems.js.map