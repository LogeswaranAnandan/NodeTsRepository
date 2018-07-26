import 'reflect-metadata';
import 'es6-shim';
import { createExpressServer, useContainer } from 'routing-controllers';
import {Container} from 'typedi';
import { OrdersController } from './controllers/orders.controller';
import * as dotenv from 'dotenv';


useContainer(Container);

var app = createExpressServer({
    cors: true,
    controllers: [OrdersController]
});

dotenv.config({path: './.env'});

const port = process.env.PORT;
console.log('port = ' + process.env.PORT);
console.log('environment = ' + process.env.NODE_ENV);
console.log('db-hostname = ' + process.env.DB_HOSTNAME);
console.log('db-port = ' + process.env.DB_PORT);
app.listen(port, () => console.log(`listening on port ${port}.....`));