
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {WelcomeController, WcsController, PromiseController} from './controllers';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;


if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
  }
app.use(cors());
app.use('/welcome', WelcomeController);
app.use('/wcs',WcsController);
app.use('/promise', PromiseController)

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});