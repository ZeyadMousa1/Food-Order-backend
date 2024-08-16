import { Request, Response, NextFunction } from 'express'
import {CreateVandorInput} from '../dto'

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
    
    const { name, address, email, foodType, ownerName, password, phone, pincode } = <CreateVandorInput>req.body;
    
    res.json({name, address, email, foodType, ownerName, password, phone, pincode})
}


export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {
    

}


export const GetVandorByID = async (req: Request, res: Response, next: NextFunction) => {
    

}