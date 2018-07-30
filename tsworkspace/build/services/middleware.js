"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport = __importStar(require("passport"));
var passport_local_1 = require("passport-local");
function local() {
    passport.authenticate('local', { session: false });
    passport.use(new passport_local_1.Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, callback) {
        console.log('inside local strategy');
    }));
    // passport.use(new JwtStrategy({
    //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //     secretOrKey: 'secret'
    // }, function (jwtPayLoad, callback) {
    //     console.log('inside jwt strategy');
    // }));
}
exports.local = local;
// passport.use(new JwtStrategy({
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'secret'
// }, function (jwtPayLoad, callback) {
//     console.log('inside jwt strategy');
// }));
//# sourceMappingURL=Middleware.js.map