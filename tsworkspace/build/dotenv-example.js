"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
console.log('No value for FOO yet:', process.env.FOO);
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.load();
}
console.log('Now the value for FOO is:', process.env.FOO);
//# sourceMappingURL=dotenv-example.js.map