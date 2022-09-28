import { Request, Response } from 'express';

module.exports = (app: any) => {
    app.get("/", (req: Request, res: Response) => {
        res.send("Server Working")
    })
}