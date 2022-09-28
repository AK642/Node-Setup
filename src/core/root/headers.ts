import { Request, Response, NextFunction } from 'express';

module.exports = (app: any) => {
    app.use(function (req: Request, res: { header: (arg0: string, arg1: string) => void; setHeader: (arg0: string, arg1: string | boolean) => void; }, next: NextFunction) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization, Access-Control-Allow-Headers");
        next();
    });
}