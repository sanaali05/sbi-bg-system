import BankguranteeModel from '../Model/Bankgurantee.model.js';



export const Post_Bankgurantee = async (req, res) => {
    try {
        const BankguranteeEntry = await BankguranteeModel(req.body);
        await BankguranteeEntry.save();
        res.send(BankguranteeEntry);


    } catch (error) {
        console.log(error);
    }
}


export const Get_Bankgurantee = async (req, res) => {
    try {
        const GetData = await BankguranteeModel.find();
        res.send(GetData);
    } catch (error) {
        console.log(error);

    }
}


export const Delete_Bankgurantee = async (req, res) => {
    const { id } = req.params;
    try {
        await BankguranteeModel.findOneAndDelete({ _id: id });
        res.send("Deleted Bankgurantee Entry")


    } catch (error) {
        console.log(error);

    }
}


export const Update_Bankgurantee = async (req, res) => {
    const { id } = req.params; 
    try {
console.log(id);
console.log(req.body)
        const Data = await BankguranteeModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json({ message: "updated successfully" });
    } catch (error) {
        console.log(error);

    }
}
export const change_Status = async (req, res) => {
    const { id } = req.params;

    try {
        const Data = await BankguranteeModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json({ message: "Status Successfully Changed" });

    } catch (error) {
        console.log(error);

    }
}