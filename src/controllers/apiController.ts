import { Request, Response } from 'express';

export const helloWord = (req: Request, res: Response) => {
    res.json({
        message: 'Hello World',
    });
};
