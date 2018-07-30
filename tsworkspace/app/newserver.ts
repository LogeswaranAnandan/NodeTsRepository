import express from 'express';
import {JwtController} from './controllers/jwt.controller'
const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.use('/hello', )

app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});