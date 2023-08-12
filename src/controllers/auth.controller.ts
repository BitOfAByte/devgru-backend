import { Request, Response } from 'express';
import {User} from "../Database/Models/User";
import {hashPassword} from "../Utils/auth";
import {compareSync} from "bcryptjs";
import { createAccessToken, sendAccessToken } from '../Utils/auth'

export const registerUser = async (req: Request, res: Response) => {
    const { username, password, callsign } = req.body;
    const user = await User.findOne({ where: { username }});
    if(user) return res.json({ message: "Username taken"})
    const hashedPassword = await hashPassword(password, 10);
    const newUser = User.create({ username, password: hashedPassword, callsign });
    return newUser ? res.json({ message: "Created user " + newUser.username}) : res.json({ message: "failed to create user"})
}


export const LoginUser = async(req: Request, res: Response) => {
    const { username, password } = req.body;
    if(!username || !password) return res.json({ message: "invalid fields"})
    const user = await User.findOne({ where: { username }})
    if(!user) return res.json({ message: "No user found!"});
    const vaildPass = await compareSync(password, user.password);
    if(vaildPass) {
        sendAccessToken(res, createAccessToken(user))
    }
}


export const LogoutUser = (_req: Request, res: Response) => {
    sendAccessToken(res, "")
    return res.json({ message: "Logged out!"})
}
