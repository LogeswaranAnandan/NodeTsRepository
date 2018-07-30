import { Service } from 'typedi';
import request from 'request';
import https from 'https';

@Service('http.Util')
export class HttpUtil {
    ERR_INVALID_REQUEST = 'INVALID REQUEST';
    agentOptions = {
        host: '192.168.35.129',
        path: '/',
        rejectUnauthorized: false
    }
    agent = new https.Agent(this.agentOptions);

    async makeHttpRequest(requestUrl: string, requestMethod: string, requestBody: any) {
        var response: any;
        var requestParameters = {
            url: requestUrl,
            method: requestMethod,
            agent: this.agent,
            // body: "hello"
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const promise = new Promise((resolve, reject) => {
            request(requestParameters, (err: Error, res: any, body: Body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            })
        });
        await promise.then((body: any) => {
            console.log('resolved promise');
            response = JSON.parse(body);
        }).catch((err) => {
            console.log('inside error promise');
            console.log(err);
        })
        return response;
    }
}