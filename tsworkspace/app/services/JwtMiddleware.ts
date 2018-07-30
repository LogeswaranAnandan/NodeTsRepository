import { ExpressMiddlewareInterface } from 'routing-controllers';
import * as express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

export class JwtMiddleware implements ExpressMiddlewareInterface {
    authenticate = (callback: any) => passport.authenticate('jwt', { session: false }, callback);
    
    use(req: express.Request, res: express.Response, next: express.NextFunction): Promise<passport.Authenticator> {
        return this.authenticate((err: any, user: any, info: any) => {
            if (err || !user) {
                console.log('Unauthorized access');
                res.status(401);
                res.send("you are not authorized to access this resource");
                return res;
            }
            req.user = user;
            return next();
        })(req, res, next);
    }
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, callback) {
    console.log('inside local strategy');
}
));

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, function(jwtPayLoad, callback) {
    console.log('inside jwt strategy middleware');
    console.log(jwtPayLoad);
    if (jwtPayLoad.iss === "nodeServer" && jwtPayLoad.userId !== null) {
        callback(null, true)
    } else {
        callback(null, false);
    }
}));
