import 'reflect-metadata';
import 'es6-shim';
import { createExpressServer, useContainer, Action } from 'routing-controllers';
import {Container} from 'typedi';
import { OrdersController } from './controllers/orders.controller';
import { JwtController } from './controllers/jwt.controller';
import * as dotenv from 'dotenv';
import { JwtMiddleware } from './services/JwtMiddleware';
// import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import './services/jwt.service';


const passport = require('passport');



useContainer(Container);



var app = createExpressServer({
    authorizationChecker: async (action: Action, roles: String[]) => {
        passport.authenticate('jwt', {session: false});
        console.log('inside authorization');
        return true;
    },
    cors: true,
    controllers: [OrdersController, JwtController],
    middlewares: [JwtMiddleware, passport.authenticate]
});

app.use(passport.initialize());
app.use(passport.session());

dotenv.config({path: './.env'});

const port = process.env.PORT;
console.log('port = ' + process.env.PORT);
console.log('environment = ' + process.env.NODE_ENV);
console.log('db-hostname = ' + process.env.DB_HOSTNAME);
console.log('db-port = ' + process.env.DB_PORT);
app.listen(port, () => console.log(`listening on port ${port}.....`));
