import 'reflect-metadata';
import {getRouteInfo, InversifyExpressServer} from 'inversify-express-utils';
import {Container} from 'inversify';
import {MODULES} from "./src/app/index";
import express, {Express} from "express";

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


const serverInstance = server.build();
serverInstance.listen(8080);

const routeInfo = getRouteInfo(container);
app.set("router infog",routeInfo);
app.listen(app.get("port"), () => {
    console.log("server started at http://localhost:" + routeInfo.entries().next());
});
module.exports = app;
