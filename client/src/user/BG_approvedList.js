import React, { useEffect, useMemo, useState } from 'react'
import { MaterialReactTable } from 'material-react-table';

import { decrypt } from '../helper/encryptionDecryption';
import { deleteImage, postDocument } from '../redux/actions/BG_document.Action.js';
import { getBGForm, patchBGForm } from '../redux/actions/BG_Form.Action';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Header from './Header';





function BG_approvedList(props) {

    const [modalData, setModalData] = useState(null);
    const [tableData, setTableData] = useState([]);

    const dispatch = useDispatch()

    const viewHandler = (item) => {
        const { _id, status, remark, ApplicantMobile, BGclaimDate, EmailIDApplicant, Amount, projectID, projectName, swiftCode, EmailIDbank, EmailIDsbi, ExpiryDateBG, applicantIDnumber, applicantName, ifscCode, issueDate, issuingBankName, issuingBranchName, physicalDocument } = item
        const decryptedData = {
            "ApplicantMobile": decrypt(ApplicantMobile),
            "BGclaimDate": decrypt(BGclaimDate),
            "EmailIDApplicant": decrypt(EmailIDApplicant),
            "Amount": decrypt(Amount),
            "EmailIDbank": decrypt(EmailIDbank),
            "EmailIDsbi": decrypt(EmailIDsbi),
            "ExpiryDateBG": decrypt(ExpiryDateBG),
            "applicantIDnumber": decrypt(applicantIDnumber),
            "applicantName": decrypt(applicantName),
            "ifscCode": decrypt(ifscCode),
            "issueDate": decrypt(issueDate),
            "issuingBankName": decrypt(issuingBankName),
            "issuingBranchName": decrypt(issuingBranchName),
            "projectID": decrypt(projectID),
            "projectName": decrypt(projectName),
            "remark": decrypt(remark),
            "swiftCode": decrypt(swiftCode),
            physicalDocument: physicalDocument !== null ? physicalDocument : null,
            _id: _id
        }
        setModalData(decryptedData);

    }

    const add = async () => {

        if (modalData.physicalDocument) {
            await patchBGForm({ _id: modalData._id, physicalDocument: modalData.physicalDocument });
            document.getElementById("modelClose").click();
            dispatch(getBGForm())
        }
        else {
            toast.error("Image not uploaded", {
                position: "top-center"
            })
        }
    }

    const ImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("document", file)
        setModalData({ ...modalData, physicalDocument: await postDocument(formData) });
    }



    const imgDelete = async (url) => {
        await deleteImage(url);
        setModalData({ ...modalData, physicalDocument: null })
    }



    const columns1 = useMemo(
        () => [
            {
                header: "Action ",
                accessorKey: 'action',
            },
            {
                header: "Remark",
                accessorKey: 'remark',
            },
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

            const filterData = props.data.filter(item => item.status === true && !item.physicalDocument)
            const data = filterData.map((item, i) => {

                return {
                    action: <div className='d-flex gap-3'><button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className=' btn btn-warning my-auto' onClick={() => viewHandler(item)} >View</button></div>,
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
                    remark: decrypt(item.remark),
                    swiftCode: decrypt(item.swiftCode),
                    _id: item._id,

                }
            })
            setTableData(data)
        }
    }, [props.data])

    return (
        <>
            <Header title={"Bankgurantee list for custodian"} />
            <div className="mx-3">
                <MaterialReactTable columns={columns1} data={tableData} />
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                            <button type="button" className="btn-close" id="modelClose" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">

                                            <h4 className="card-title mb-4 ">Applicant Details</h4>
                                            <div className="table-responsive">
                                                <table className="table caption-top">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Sr No.</th>
                                                            <th scope="col">Field</th>
                                                            <th scope="col">Details</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {modalData && Object.keys(modalData).map((key, index) => (
                                                            <tr key={index}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{key}</td>
                                                                <td>{modalData[key]}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {modalData && modalData.physicalDocument ?
                                        <div>
                                            <button onClick={() => imgDelete(modalData.physicalDocument)} className="btn btn-danger m-3 position-absolute top-0 end-0"><i className="bi bi-trash3"></i></button>
                                            <img src={modalData && axios.defaults.baseURL + modalData.physicalDocument} alt="Selected" width={"100%"} />
                                        </div>
                                        : <>
                                            <div className="col-6">
                                                <label htmlFor="addImagesInput" className="form-label border border-2  rounded px-4  text-center"><i className="bi bi-camera fs-1"></i><p>Update</p></label>
                                                <input hidden type="file" className="form-control" id='addImagesInput' required onChange={ImageUpload} />
                                            </div>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={add} type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BG_approvedList
