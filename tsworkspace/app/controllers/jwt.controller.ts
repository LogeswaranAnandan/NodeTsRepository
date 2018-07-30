import { Controller, Param, Get, UseBefore, Middleware, Authorized, Post } from 'routing-controllers';
import { Container, Inject } from 'typedi';
// import * as jwtService from '../services/jwt.service';
import * as passport from 'passport';
import { JwtMiddleware } from '../services/JwtMiddleware';
import { userInfo } from 'os';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { OrdersService } from '../services/orders.service';
import { HttpUtil } from '../services/HttpUtil';
import * as jwt from 'jsonwebtoken';

@Controller()
export class JwtController {
    // constructor(@Inject('jwt.service') private jwtService: JwtService) {
    // }

    constructor(@Inject('http.Util') private httpUtil: HttpUtil) {
    }

    @Get('/secret')
    // @Authorized()
    @UseBefore(JwtMiddleware)
    // @UseBefore(Middleware)
    // @UseBefore(passport.authenticate)
    // @UseBefore(passport.authenticate('jwt', {session: false}))
    async secret() {
        // passport.authenticate('local', {session: false})
        return "inside secret";
    }

    @Get('/login')
    async login() {
        const REQUEST_URL = `https://192.168.35.129/wcs/resources/store/10201/loginidentity?responseFormat=json`;
        const POST_METHOD = `POST`;
        var requestBody: any = {
            "logonPassword": "asdf@123",
            "logonId": "asdf"
        }
        const responseBody = await this.httpUtil.makeHttpRequest(REQUEST_URL, POST_METHOD, requestBody);
        console.log(responseBody);
        if (responseBody.errors !== undefined) {
            console.log('invalid username or password');
            return "Invalid username or password";
        }
        responseBody.sub = responseBody.userId;
        responseBody.iss = "nodeServer";

        var jwtOptions = {
            header: {
                "typ": "JWT"
            }
        }

        const token = jwt.sign(JSON.stringify(responseBody), 'secret', jwtOptions);

        return token;
    }

}