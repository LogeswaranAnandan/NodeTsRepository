import request from 'request';
import { Router, Request, Response } from 'express';

const router: Router = Router();
router.get('/', wcsCallback);

async function wcsCallback(req: Request, res: Response) {
    var response = await makeHttpRequest(`http://192.168.35.129/wcs/resources/store/10201/productview/byIds/?id=12812&catalogId=10052`);
    console.log('--------------------sending response-------------');
    console.log(response);
    res.send(response);
}

//http://192.168.35.129/wcs/resources/store/10201/productview/byIds/?id=12812&catalogId=10052
async function makeHttpRequest(url: string) {
    var response;
    const promise = new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            if (err) {
                reject(err);
            }
            resolve(body);
        })
    });
    await promise.then((body) => {
        console.log('inside then');
        response = body;
    }).catch((err) => {
        console.log('inside catch');
        console.log(err);
    })
    return response;
}

export const PromiseController: Router = router;
