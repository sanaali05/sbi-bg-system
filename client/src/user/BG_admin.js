import React, { useEffect, useMemo, useState } from 'react'
import { decrypt } from '../helper/encryptionDecryption'

import { MaterialReactTable } from 'material-react-table'
import Header from './Header';
import axios from 'axios';

export default function BG_admin(props) {

    const [tableData, setTableData] = useState([]);

    const columns = useMemo(
        () => [
            {
                header: "Physical BG ",
                accessorKey: 'physicalBG',
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

            const filterData = props.data.filter(item => item.status === true && item.physicalDocument)
            const data = filterData.map((item, i) => {

                return {
                    physicalBG: <a class='btn btn-success' href={axios.defaults.baseURL + item.physicalDocument}>View</a>,
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
            <Header title={"Bankgurantee list for admin"} />
            <div className='mx-3'>
                <MaterialReactTable columns={columns} data={tableData} />
            </div>
        </>
    )
}
