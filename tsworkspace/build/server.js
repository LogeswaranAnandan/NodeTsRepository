"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var controllers_1 = require("./controllers");
var app = express_1.default();
var port = process.env.PORT || 4000;
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.load();
}
app.use(cors_1.default());
app.use('/welcome', controllers_1.WelcomeController);
app.use('/wcs', controllers_1.WcsController);
app.use('/promise', controllers_1.PromiseController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=server.js.map