import mongoose from "mongoose";
const BankguranteeSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        trim: true,
        default: null

    },
    issueDate: {
        type: String,
        required: true,
        trim: true,
    },
    issuingBankName: {
        type: String,
        required: true,
        trim: true,
    },
    issuingBranchName: {
        type: String,
        required: true,
        trim: true,
    },
    ifscCode: {
        type: String,
        required: true,
        trim: true,
    },
    swiftCode: {
        type: String,
        required: true,
        trim: true,
    },
    applicantName: {
        type: String,
        required: true,
        trim: true,
    },
    applicantIDnumber: {
        type: String,
        required: true,
        trim: true,
    },
    projectName: {
        type: String,
        required: true,
        trim: true,
    },
    projectID: {
        type: String,
        required: true,
        trim: true,
    },
    Amount: {
        type: String,
        required: true,
        trim: true,
    },
    ExpiryDateBG: {
        type: String,
        required: true,
        trim: true,
    },
    BGclaimDate: {
        type: String,
        required: true,
        trim: true,
    },
    EmailIDbank: {
        type: String,
        required: true,
        trim: true,
    },
    ApplicantMobile: {
        type: String,
        required: true,
        trim: true,
    },
    EmailIDApplicant: {
        type: String,
        required: true,
        trim: true,
    },
    EmailIDsbi: {
        type: String,
        required: true,
        trim: true,
    },
    remark:{
        type:String,
        trim:true
    },
    physicalDocument:{
        type:String,
        trim:true
    },


})


const Bankgurantee = mongoose.model('Bankgurantee', BankguranteeSchema);
export default Bankgurantee