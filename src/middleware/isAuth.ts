import 'dotenv/config'
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

export const isAuth = (req: Request, res: Response, done: NextFunction) => {
    const authorization = req.headers['authorization'];
    if(!authorization) return res.status(401).json({ message: "Please login"})
    try {
        const token = authorization.split(" ")[1];
        const payload = verify(token, process.env.AccessToken!)
        console.table(payload);
    } catch (e) {
        console.error(e.message)
    }
    
    return done();
}