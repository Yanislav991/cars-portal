import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const secretKey: string = process.env.JWT_SECRET || 'my-secret-key';
        const decoded = jwt.verify(token, secretKey);

        // Attach the user ID to the request for further processing
        req.body.userId = (decoded as any).userId;

        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Unauthorized' });
    }
}