import 'reflect-metadata';
import express, { Express } from 'express';
import {InversifyExpressServer} from 'inversify-express-utils';
import {Container} from 'inversify';
import {MODULES} from "./src/app/index";

var compression = require('compression');

const app: Express = express();
app.disable('x-powered-by');
app.use(compression());
const container = new Container();

container.load(...MODULES);

const server = new InversifyExpressServer(container, null, null, app)
    .setErrorConfig(app => {
        app.use((err: any, req: express.Request , res: express.Response, next: express.NextFunction ) => {
            return res.status(500).send();
        })
    });
/**
 * Start Express server.
 */
app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


const serverInstance = server.build();
serverInstance.listen(8080);
