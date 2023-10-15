import jwt from 'jsonwebtoken'
import Admin from '../Model/admin.model.js'

export const adminAuth =async (req,res,next)=>{
    try {
        const token=req.headers.authorization
        const verifyUser = jwt.verify(token,process.env.TOKEN_SECRET_KEY);
        if(verifyUser){
            const userId=await findOne({_id:verifyUser._id})
            req.body.verifyUser=userId._id

            next()
        }
    else{
        res.status(401).json({message:"Unautherized User"})
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}