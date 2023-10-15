import bcrypt from "bcrypt";

export const passwordEncrypt= async (req,res,next)=>{
    try {
        const hashPassword =await bcrypt.hash(req.body.password,12) ;
        req.body.password = hashPassword
        next()
        
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}