import { Service, Container, Inject } from 'typedi';
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';

// @Service('jwt.service')
// export class JwtService {

// }

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
// }, function (email, password, callback) {
//     console.log('inside local strategy');
// }
// ));

// passport.use(new JwtStrategy({
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'secret'
// }, function(jwtPayLoad, callback) {
//     console.log('inside jwt strategy');
//     return true;
// }));