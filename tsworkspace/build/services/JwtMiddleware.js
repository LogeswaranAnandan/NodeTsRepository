"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = require("passport-local");
var passport_jwt_1 = require("passport-jwt");
var JwtMiddleware = /** @class */ (function () {
    function JwtMiddleware() {
        this.authenticate = function (callback) { return passport_1.default.authenticate('jwt', { session: false }, callback); };
    }
    JwtMiddleware.prototype.use = function (req, res, next) {
        return this.authenticate(function (err, user, info) {
            if (err || !user) {
                console.log('Unauthorized access');
                res.status(401);
                res.send("you are not authorized to make this request");
                return res;
            }
            req.user = user;
            return next();
        })(req, res, next);
    };
    return JwtMiddleware;
}());
exports.JwtMiddleware = JwtMiddleware;
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, callback) {
    console.log('inside local strategy');
}));
passport_1.default.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, function (jwtPayLoad, callback) {
    console.log('inside jwt strategy middleware');
    console.log(jwtPayLoad);
    if (jwtPayLoad.iss === "nodeServer" && jwtPayLoad.userId !== null) {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
}));
//# sourceMappingURL=JwtMiddleware.js.map