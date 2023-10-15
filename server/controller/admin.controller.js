import Admin from "../Model/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export const postAdmin = async (req, res) => {
    try {
        console.log(req.body)
        const adminData = await Admin(req.body);
        await adminData.save()
        res.send(adminData)
    } catch (error) {
        console.log(error)
    }
}

export const getAdmin = async (req, res) => {
    try {
        const allAdmin = await Admin.find(req.body)
        res.send(allAdmin)
    } catch (error) {
        console.log(error)
    }
}


export const deleteAdmin = async (req, res) => {

    const { id } = req.params
    try {
        await Admin.findOneAndDelete({ _id: id })
        res.send("Admin delted successfully")
    } catch (error) {
        console.log(error)
    }
}


export const adminLogin = async (req, res) => {

    try {
        const { username, password, userType } = req.body
        const userTypeData = await Admin.findOne({ userType })
        if (userTypeData) {

            if (userTypeData.username === username) {
                const verifyPassword = bcrypt.compare(password, userTypeData.password)
                if (verifyPassword) {
                    userTypeData.token = jwt.sign({_id:userTypeData._id.toString()},process.env.TOKEN_SECRET_KEY)
                    res.json({ data: userTypeData, message: "Logged in successfully" })

                } else {
                    res.json({ message: "Invalid Credential" })
                }
            } else {
                res.json({ message: "Invalid Credential" })
            }

        } else {
            res.json({ message: "Invalid Credential" })
        }

        const allAdmin = await Admin.find(req.body)
        res.send(allAdmin)
    } catch (error) {
        console.log(error)
    }
}
