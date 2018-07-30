"use strict";
/* app/controllers/welcome.controller.ts */
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
// Import only what we need from express
var express_1 = require("express");
// import request from 'request';
// Assign router to the express.Router() instance
var router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', function (req, res) {
    res.send('inside welcome');
});
router.get('/welcome', function (req, res) {
    var responseBody;
    var https = require('https');
    var request = require('request');
    var agentOptions = {
        host: '192.168.35.129',
        path: '/',
        method: 'GET',
        rejectUnauthorized: false
    };
    var agent = new https.Agent(agentOptions);
    var requestParameters = {
        url: 'https://192.168.35.129/wcs/resources/store/10201/order/26001',
        method: 'GET',
        agent: agent
    };
    console.log('Before Request function');
    request(requestParameters, function (err, resp, body) {
        if (err) {
            console.log(err);
        }
        responseBody = JSON.parse(body);
        console.log('------------inside the function----------------');
        console.log(responseBody);
    });
    res.header('Content-Type', 'application/json');
    // res.send(responseBody);
    console.log('End of line');
    res.send('hello');
});
router.get('/hello', responseGenerator);
function responseGenerator(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        function wcsCallBack() {
            return __awaiter(this, void 0, void 0, function () {
                var callBackResponse;
                return __generator(this, function (_a) {
                    request({
                        url: 'https://192.168.35.129/wcs/resources/store/10201/order/26001',
                        method: 'GET',
                        agent: agent
                    }, function (err, resp, body) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('------------------inside function-----------------------------------');
                        console.log(JSON.parse(body));
                        callBackResponse = JSON.parse(body);
                    });
                    console.log('----------------------inside callBackResponse-------------------');
                    console.log(callBackResponse);
                    return [2 /*return*/, callBackResponse];
                });
            });
        }
        var responseBody, https, request, agentOptions, agent;
        return __generator(this, function (_a) {
            https = require('https');
            request = require('request');
            agentOptions = {
                host: '192.168.35.129',
                path: '/',
                method: 'GET',
                rejectUnauthorized: false
            };
            agent = new https.Agent(agentOptions);
            responseBody = wcsCallBack();
            console.log('---------------------------------------response body------------------------------------------');
            console.log(responseBody);
            res.header('Content-Type', 'application/json');
            res.send(responseBody);
            return [2 /*return*/];
        });
    });
}
router.get('/:name', function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    console.log('inside hello world' + { name: name });
    // Greet the given name
    res.send("Hello, " + name);
});
// Export the express.Router() instance to be used by server.ts
exports.WelcomeController = router;
//# sourceMappingURL=welcome.controller.js.map