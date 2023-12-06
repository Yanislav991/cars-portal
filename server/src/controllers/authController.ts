import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import User from '../models/userModel'

class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, hashedPassword });
            await newUser.save();

            const secretKey: string = process.env.JWT_SECRET || 'my-secret-key';
            const token = jwt.sign({ userId: newUser._id }, secretKey, {
                expiresIn: '1h'
            });

            res.status(201).json({ token: token, username: newUser.username });
        } catch (error) {
            res.status(500).json({ error: 'Error registering the user' })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ username });

            if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
                res.status(401).json({ error: 'Invalid credentials' });
            }
            const secretKey: string = process.env.JWT_SECRET || 'my-secret-key';
            const token = jwt.sign({ userId: user?._id }, secretKey, {
                expiresIn: '1h'
            });

            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Error logging in' })
        }
    }
}

export default new AuthController();