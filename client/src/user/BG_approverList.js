import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MaterialReactTable } from 'material-react-table';



import logo from '../images/logo.png'
import { decrypt, encrypt } from '../helper/encryptionDecryption';
import { changeStatus, getBGForm } from '../redux/actions/BG_Form.Action';
import { useDispatch } from 'react-redux';
import { Update } from '@mui/icons-material';
import Header from './Header';




function BG_approverList(props) {
    const dispatch = useDispatch()
    const [tableData, setTableData] = useState([]);
    const columns1 = useMemo(
        () => [
            {
                header: "Action ",
                accessorKey: 'action',
            }
            ,
            {
                header: " Issue Date of BG ",
                accessorKey: 'issueDate',
            },
            {
                header: " Issuing Bank",
                accessorKey: 'issuingBankName',
            },
            {
                header: "Issuing Branch",
                accessorKey: "issuingBranchName"
            },
            {
                header: "IFSC Code",
                accessorKey: "ifscCode"
            },
            {
                header: "SWIFT Code",
                accessorKey: "swiftCode"
            },
            {
                header: "Applicant Name",
                accessorKey: "applicantName"
            },
            {
                header: "Applicant Identification No.",
                accessorKey: "applicantIDnumber"
            },
            {
                header: "Name of Project",
                accessorKey: "projectName"
            },
            {
                header: "Project ID",
                accessorKey: "projectID"
            },
            {
                header: "Amount",
                accessorKey: "Amount"
            },
            {
                header: "Expiry Date of BG",
                accessorKey: "ExpiryDateBG"
            },
            {
                header: "BG claim date",
                accessorKey: "BGclaimDate"
            },
            {
                header: "Email-ID of Bank",
                accessorKey: "EmailIDbank"
            },
            {
                header: "Mobile No. of Applicant",
                accessorKey: "ApplicantMobile"
            },
            {
                header: "Email-ID of Applicant",
                accessorKey: "EmailIDApplicant"
            },
            {
                header: "Email-ID of SBI Vindhyachal",
                accessorKey: "EmailIDsbi"
            },

        ],
        [],
    )

    useEffect(() => {
        if (props.data.length !== 0) {

            const filterData = props.data.filter(item => item.status === null)
            const data = filterData.map((item, i) => {
                return {
                    action: <div className='d-flex gap-3'><button type="button" data-bs-toggle="modal" data-bs-target="#statusModal" className=' btn btn-success my-auto' onClick={() => { approveHandler(item._id, true) }}> Approve</button><button type="button" data-bs-toggle="modal" data-bs-target="#statusModal" className=' btn btn-danger my-auto' onClick={() => approveHandler(item._id, false)}>Reject</button></div>,
                    Amount: decrypt(item.Amount),
                    ApplicantMobile: decrypt(item.ApplicantMobile),
                    BGclaimDate: decrypt(item.BGclaimDate),
                    BGclaimDate: decrypt(item.BGclaimDate),
                    EmailIDApplicant: decrypt(item.EmailIDApplicant),
                    EmailIDbank: decrypt(item.EmailIDbank),
                    EmailIDsbi: decrypt(item.EmailIDsbi),
                    ExpiryDateBG: decrypt(item.ExpiryDateBG),
                    applicantIDnumber: decrypt(item.applicantIDnumber),
                    applicantName: decrypt(item.applicantName),
                    ifscCode: decrypt(item.ifscCode),
                    issueDate: decrypt(item.issueDate),
                    issuingBankName: decrypt(item.issuingBankName),
                    issuingBranchName: decrypt(item.issuingBranchName),
                    projectID: decrypt(item.projectID),
                    projectName: decrypt(item.projectName),
                    swiftCode: decrypt(item.swiftCode),
                    _id: item._id,

                }
            })






            setTableData(data)
        }
    }, [props.data])


    const [update, setUpdate] = useState({
        id: "",
        status: "",
        remark: ""
    })

    const approveHandler = async (id, status) => {
        setUpdate({
            ...update,
            id: id,
            status: status
        })
    }


    const getRemark = async (e) => {


        setUpdate({
            ...update,
            remark: (e.target.value)
        })

    }


    const submit = async (e) => {
        e.preventDefault();
        update.remark = encrypt(update.remark)

        await changeStatus(update)
        dispatch(getBGForm())
        setUpdate({
            id: "",
            status: "",
            remark: ""
        })
        document.getElementById("statusModal-btn").click()
    }
    return (
        <>
            <Header title={"Bankgurantee list for approver"} />
            <div className="mx-3" >

                <MaterialReactTable columns={columns1} data={tableData} />

                {/* Remark model */}
                <div className="modal fade" id="statusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Remark</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='statusModal-btn'></button>
                            </div>
                            <div className="modal-body">
                                <form className='needs-validation' noValidate onSubmit={submit}>
                                    <label htmlFor="Remark"><strong> Write a remark <span className='text-danger'>*</span></strong></label>
                                    <input className='form-control my-3' value={update.remark} type="text" name="remark" id="Remark" placeholder='write a remark' required onChange={getRemark} />
                                    <button type='submit' className=' btn btn-primary' onClick={props.validation}  >submit</button>
                                    {/* onClick={() => { approveHandler(item._id, false) }} */}

                                </form>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BG_approverList;
