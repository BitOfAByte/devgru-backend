import 'dotenv/config'
import { sign } from 'jsonwebtoken'
import { User } from "../Database/Models/User";
import {genSalt, hash} from "bcryptjs";
import { Response} from 'express'
export const createAccessToken = async(user: User) => {
    return sign({ username: user.username, rank: user.rank, callsign: user.callsign, id: user.id }, process.env.AccessToken!, {
        expiresIn: "7d"
    })
};

export const hashPassword = async(password: string, salt: number) => {
    return hash(password, await genSalt(salt))
}


export const sendAccessToken = (res: Response, token: string) => {
    return res.cookie("qid", token, {
        httpOnly: true
    })
}