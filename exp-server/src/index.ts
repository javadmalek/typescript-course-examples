import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();

// V 214
// it is a middleware and in charge to extract the body of request
// and attach it to the outcoming request object
app.use(bodyParser({ extended: true }));
app.use(cookieSession({ keys: ['kjhjkhkj'] }));

app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log('Listening on posrt 3000'));
