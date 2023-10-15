import {Router} from "express";
import { Post_Bankgurantee ,Get_Bankgurantee ,Update_Bankgurantee, change_Status } from "../controller/Bankgurantee.controller.js";
// import { adminLogin, deleteAdmin, getAdmin, postAdmin } from "../controller/Admin.controller.js";
// import { adminAuth } from "../middleware/adminAuth.middleware.js";
import uploadDocuments from "../middleware/bgDocument.middleware.js";
import { postDocument } from "../controller/BgDocument.controller.js";
import { deleteFile } from "../helper/helper.js";
import chalk from "chalk";

const router=Router();



router.post("/bank-gurantee",Post_Bankgurantee);
router.get("/bank-gurantee",Get_Bankgurantee)
// router.delete("/bank-gurantee/:id",Delete_Bankgurantee)
router.patch("/bank-gurantee/:id",Update_Bankgurantee)
router.patch("/bank-gurantee-status/:id",change_Status)

// router.post("/login",adminLogin)
// router.get("/admin",getAdmin)
// router.delete("/admin/:id",deleteAdmin)

router.post("/bg-document",uploadDocuments.single("document"),postDocument);


//delete image
router.post('/delete-image', async (req, res) => {
    try {

        const data = await deleteFile(req.body.data)

        res.status(200).json({ message: "Image deleted successfully." })
        console.log(chalk.bgGreen.bold("Image deleted successfully."))

    } catch (error) {
        console.log(chalk.bgRed.bold(error))
        res.status(500).json({ message: "Internal Server Error." })
    }
})

export default router;