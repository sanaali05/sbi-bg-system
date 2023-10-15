import React, { useMemo, useState } from 'react'

import logo from '../images/logo.png'
import { encrypt,decrypt} from '../helper/encryptionDecryption';
import { postBGForm } from '../redux/actions/BG_Form.Action';

export default function BG_form(props) {


    const [formData, setFormData] = useState({
        issueDate: "",
        issuingBankName: "",
        issuingBranchName: "",
        ifscCode: "",
        swiftCode: "",
        applicantName: "",
        applicantIDnumber: "",
        projectName: "",
        projectID: "",
        Amount: "",
        ExpiryDateBG: "",
        BGclaimDate: "",
        EmailIDbank: "",
        ApplicantMobile: "",
        EmailIDApplicant: "",
        EmailIDsbi: ""
    })
    const[data,setData]=useState({
        issueDate: "",
        issuingBankName: "",
        issuingBranchName: "",
        ifscCode: "",
        swiftCode: "",
        applicantName: "",
        applicantIDnumber: "",
        projectName: "",
        projectID: "",
        Amount: "",
        ExpiryDateBG: "",
        BGclaimDate: "",
        EmailIDbank: "",
        ApplicantMobile: "",
        EmailIDApplicant: "",
        EmailIDsbi: ""
    })

    const getData =(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
        setData({...data,[event.target.name]:encrypt(event.target.value)})
    }

    const submit = async(e) => {
        e.preventDefault()
        // console.log(data)
        // console.log(formData)
       await postBGForm(data)

        setFormData({
            issueDate: "",
            issuingBankName: "",
            issuingBranchName: "",
            ifscCode: "",
            swiftCode: "",
            applicantName: "",
            applicantIDnumber: "",
            projectName: "",
            projectID: "",
            Amount: "",
            ExpiryDateBG: "",
            BGclaimDate: "",
            EmailIDbank: "",
            ApplicantMobile: "",
            EmailIDApplicant: "",
            EmailIDsbi: ""
        })
        
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="#">
                                <img src={logo}
                                    alt="sbi logo" className='w-25' />
                            </a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li> */}
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
            <div className="container p-5 mb-5" style={{ backgroundColor: "#F7F7F7", border: "1px solid #280071" }}>
                <h1 className='' style={{ color: "#280071" }}>Enquiry form </h1>
                <form onSubmit={submit} className="needs-validation w-75" noValidate>
                    <div className="mb-2">
                        <label htmlFor='Issuing-Date' className="form-label">Issue Date of BG </label>
                        <input className='form-control' id='Issuing-Date' value={formData.issueDate} name='issueDate' onChange={getData} type="text" placeholder='Issue Date of BG' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='Issuing-Bank' className="form-label">Issuing Bank</label>
                        <input className='form-control' id='Issuing-Bank' value={formData.issuingBankName} name='issuingBankName' onChange={getData} type="text" placeholder='Bank Name' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Issuing Branch</label>
                        <input className='form-control' id='' value={formData.issuingBranchName} name='issuingBranchName'onChange={getData}  on type="text" placeholder='Issuing Bank Branch' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">IFSC Code</label>
                        <input className='form-control' id='' value={formData.ifscCode} name='ifscCode' onChange={getData} type="text" placeholder='IFSC code' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Swift code</label>
                        <input className='form-control' id='' value={formData.swiftCode} name='swiftCode' onChange={getData} type="text" placeholder='Swift code' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Applicant Name</label>
                        <input className='form-control' id=''value={formData.applicantName} name='applicantName' onChange={getData}  type="text" placeholder='Applicant Name' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Applicant Identification No.</label>
                        <input className='form-control' id=''value={formData.applicantIDnumber} name='applicantIDnumber' onChange={getData} type="text" placeholder='Applicant Identification No.' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Name of Project</label>
                        <input className='form-control' id='' value={formData.projectName} name='projectName' onChange={getData} type="text" placeholder='Project Name ' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Project ID</label>
                        <input className='form-control' id='' value={formData.projectID} name='projectID' onChange={getData}  type="text" placeholder='Project ID ' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Amount</label>
                        <input className='form-control' id='' value={formData.Amount} name='Amount' onChange={getData} onKeyDown={props.onlyNumber}   type="text" placeholder='Amount' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Expiry Date of BG</label>
                        <input className='form-control' id='' value={formData.ExpiryDateBG} name='ExpiryDateBG' onChange={getData}  type="text" placeholder='expiry date of BG' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">BG claim date</label>
                        <input className='form-control' id=''value={formData.BGclaimDate} name='BGclaimDate' onChange={getData}  type="text" placeholder='BG claim date' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Email-ID of Bank</label>
                        <input className='form-control' id='' value={formData.EmailIDbank} name='EmailIDbank' onChange={getData} type="text" placeholder='Email-ID of Bank' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Mobile No. of Applicant</label>
                        <input className='form-control' id=''value={formData.ApplicantMobile} name='ApplicantMobile' onChange={getData}  type="text" placeholder='Mobile No. of Applicant' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Email-ID of Applicant</label>
                        <input className='form-control' id='' value={formData.EmailIDApplicant} name='EmailIDApplicant' onChange={getData} type="text" placeholder='Email-ID of Applicant' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='' className="form-label">Email-ID of SBI Vindhyachal</label>
                        <input className='form-control' id=''value={formData.EmailIDsbi} name='EmailIDsbi'  onChange={getData} type="text" placeholder='Email-ID of Bank' required />
                        <div className="invalid-feedback">
                            Please enter the required details.
                        </div>
                    </div>
                    <div className="col-12">
                        <button onClick={props.validation} className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>



        </>
    )
}
