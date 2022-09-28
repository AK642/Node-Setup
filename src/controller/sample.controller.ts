import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../utility/http-status';


export const sample = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return HttpStatus.OkResponse('Sample API works...', res);
    } catch(err) {
        console.log('Error: ', err);
    }
};