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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var HttpUtil_1 = require("./HttpUtil");
var Orders_1 = require("../models/Orders");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var OrderItems_1 = require("../models/OrderItems");
var OrdersService = /** @class */ (function () {
    // @Inject('http.Util')
    // httpUtil: HttpUtil;
    function OrdersService(httpUtil) {
        this.httpUtil = httpUtil;
        this.count = 10;
    }
    OrdersService.prototype.wcsRequest = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var ORDER_URL, GET_METHOD, ERR_INVALID_ORDER_ID, orderItems, orders, orderJsonResponse, i, productId, orderItemJsonResponse, _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        GET_METHOD = 'GET';
                        ERR_INVALID_ORDER_ID = 'Invalid order Id';
                        orderItems = new Array();
                        if (orderId != null) {
                            ORDER_URL = "https://192.168.35.129/wcs/resources/store/10201/order/" + orderId;
                        }
                        else {
                            ORDER_URL = "https://192.168.35.129/wcs/resources/store/10201/order/26001";
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this.httpUtil.makeHttpRequest(ORDER_URL, GET_METHOD, null)];
                    case 2:
                        orderJsonResponse = _c.sent();
                        if (orderJsonResponse.orderId == null) {
                            throw ERR_INVALID_ORDER_ID;
                        }
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(orderJsonResponse.orderItem[i] != null)) return [3 /*break*/, 7];
                        productId = orderJsonResponse.orderItem[i].productId;
                        return [4 /*yield*/, this.httpUtil.makeHttpRequest("https://192.168.35.129/wcs/resources/store/10201/productview/byId/" + productId + "?catalogId=10052", GET_METHOD, null)];
                    case 4:
                        orderItemJsonResponse = _c.sent();
                        _a = orderItems;
                        _b = i;
                        return [4 /*yield*/, this.convertToOrderItemsObject(orderItemJsonResponse.CatalogEntryView[0])];
                    case 5:
                        _a[_b] = _c.sent();
                        _c.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7: return [4 /*yield*/, this.convertToOrdersObject(orderJsonResponse)];
                    case 8:
                        orders = _c.sent();
                        console.log("----------------orderItems-------------");
                        console.log(orderItems);
                        orders.setOrderItems(orderItems);
                        console.log("--------------sending response-----------");
                        console.log(orders);
                        return [2 /*return*/, orders];
                    case 9:
                        err_1 = _c.sent();
                        return [2 /*return*/, 'Invalid Order Id'];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    OrdersService.prototype.constructResponse = function (orderResponse, productResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var orderItems, i, angularResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderItems = new Array();
                        for (i = 0; productResponse[i] != null; i++) {
                            orderItems[i] = {
                                'name': productResponse[i].CatalogEntryView[0].name,
                                'price': productResponse[i].CatalogEntryView[0].Price[0].priceValue,
                                'shortDescription': productResponse[i].CatalogEntryView[0].shortDescription
                            };
                        }
                        angularResponse = {
                            'orderId': orderResponse.orderId,
                            'totalProductPrice': orderResponse.totalProductPrice,
                            'discount': orderResponse.adjustment[0].amount,
                            'grandTotal': orderResponse.grandTotal,
                            'orderItems': orderItems
                        };
                        return [4 /*yield*/, angularResponse];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrdersService.prototype.convertToOrdersObject = function (orderResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = class_transformer_1.plainToClass(Orders_1.Orders, JSON.parse(JSON.stringify(orderResponse)));
                        return [4 /*yield*/, class_validator_1.validate(order, { whitelist: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrdersService.prototype.convertToOrderItemsObject = function (productResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var orderItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderItem = class_transformer_1.plainToClass(OrderItems_1.OrderItems, JSON.parse(JSON.stringify(productResponse)));
                        return [4 /*yield*/, class_validator_1.validate(orderItem, { whitelist: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, orderItem];
                }
            });
        });
    };
    OrdersService = __decorate([
        typedi_1.Service('orders.service'),
        __param(0, typedi_1.Inject('http.Util')),
        __metadata("design:paramtypes", [HttpUtil_1.HttpUtil])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
// Container.bind('orders.service').to(OrdersService);
//# sourceMappingURL=orders.service.js.map