/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
// import request from 'request';
// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome

router.get('/', (req: Request, res: Response) => {
    res.send('inside welcome');
})

router.get('/welcome', (req: Request, res: Response) => {
    var responseBody: JSON;
    const https = require('https');
    const request = require('request');
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
    }

    console.log('Before Request function');

    request(requestParameters, function (err: Error, resp: Response, body: any) {
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

async function responseGenerator(req: Request, res: Response) {
    // var responseBody: JSON;
    var responseBody;
    const https = require('https');
    const request = require('request');
    var agentOptions = {
        host: '192.168.35.129',
        path: '/',
        method: 'GET',
        rejectUnauthorized: false
    };

    var agent = new https.Agent(agentOptions);
    responseBody = wcsCallBack();
    console.log('---------------------------------------response body------------------------------------------')
    console.log(responseBody);
    res.header('Content-Type', 'application/json');
    res.send(responseBody);

    async function wcsCallBack() {
        var callBackResponse;
        request({
            url: 'https://192.168.35.129/wcs/resources/store/10201/order/26001',
            method: 'GET',
            agent: agent
        }, function (err: Error, resp: Response, body: any) {
            if (err) {
                console.log(err);
            }
            console.log('------------------inside function-----------------------------------');
            console.log(JSON.parse(body));
            callBackResponse = JSON.parse(body);
        });
        console.log('----------------------inside callBackResponse-------------------');
        console.log(callBackResponse);
        return callBackResponse;
    }
    
}





router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    console.log('inside hello world' + { name });

    // Greet the given name
    res.send(`Hello, ${name}`);
});

// Export the express.Router() instance to be used by server.ts
export const WelcomeController: Router = router;