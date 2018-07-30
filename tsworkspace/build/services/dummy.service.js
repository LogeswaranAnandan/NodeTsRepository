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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var orders_service_1 = require("./orders.service");
var DummyService = /** @class */ (function () {
    function DummyService(ordersService) {
        this.ordersService = ordersService;
    }
    DummyService.prototype.newFunction = function () {
        console.log('inside new function');
    };
    DummyService = __decorate([
        typedi_1.Service(),
        __param(0, typedi_1.Inject('orders.service')),
        __metadata("design:paramtypes", [orders_service_1.OrdersService])
    ], DummyService);
    return DummyService;
}());
exports.DummyService = DummyService;
//# sourceMappingURL=dummy.service.js.map