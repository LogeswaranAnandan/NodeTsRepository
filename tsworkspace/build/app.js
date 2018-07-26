"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("es6-shim");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var orders_controller_1 = require("./controllers/orders.controller");
var dotenv = __importStar(require("dotenv"));
routing_controllers_1.useContainer(typedi_1.Container);
var app = routing_controllers_1.createExpressServer({
    cors: true,
    controllers: [orders_controller_1.OrdersController]
});
dotenv.config({ path: './.env' });
var port = process.env.PORT;
console.log('port = ' + process.env.PORT);
console.log('environment = ' + process.env.NODE_ENV);
console.log('db-hostname = ' + process.env.DB_HOSTNAME);
console.log('db-port = ' + process.env.DB_PORT);
app.listen(port, function () { return console.log("listening on port " + port + "....."); });
//# sourceMappingURL=app.js.map