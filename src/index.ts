import 'dotenv/config'
import express, { Application, Request, Response } from 'express';
import { datasource } from './Database/index';

(async () => {
    const app: Application = express();
    await datasource.initialize().then(() => console.log("Connected to database..."))

    app.get("/", (_req: Request, res: Response) => {
        res.json({ message: "Hello world!" })
    })

    app.listen(process.env.port, () => console.log("Listening on port " + process.env.port))
})();