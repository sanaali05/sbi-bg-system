import React, { useEffect, useMemo, useState } from 'react'
import { MaterialReactTable } from 'material-react-table';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import logo from '../images/logo.png'
import { decrypt, encrypt } from '../helper/encryptionDecryption';
import { useParams } from 'react-router-dom';
import { getBGForm, patchBGForm, postBGForm } from '../redux/actions/BG_Form.Action';
import { useDispatch } from 'react-redux';
import Header from './Header';

export default function BG_list(props) {
    const dispatch = useDispatch()

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [validationErrors, setValidationErrors] = useState({});


    // const getCommonEditTextFieldProps = useCallback(
    //     (cell) => {
    //         return {
    //             error: !!validationErrors[cell.id],
    //             helperText: validationErrors[cell.id],
    //             onBlur: (event) => {
    //                 const isValid =
    //                     cell.column.id === 'EmailIDbank'
    //                         ? validateEmail(event.target.value)
    //                         : cell.column.id === 'Amount'
    //                             ? props.onlyNumber(event.target.value)
    //                             : validateRequired(event.target.value);
    //                 if (!isValid) {
    //                     //set validation error for cell if invalid
    //                     setValidationErrors({
    //                         ...validationErrors,
    //                         [cell.id]: `${cell.column.columnDef.header} is required`,
    //                     });
    //                 } else {
    //                     //remove validation error for cell if valid
    //                     delete validationErrors[cell.id];
    //                     setValidationErrors({
    //                         ...validationErrors,
    //                     });
    //                 }
    //             },
    //         };
    //     },
    //     [validationErrors],
    // );

    const columns = useMemo(
        () => [
            {
                header: " Status ",
                enableEditing: false,
                accessorKey: 'status',
            },
            {
                header: " Remark ",
                enableEditing: false,
                accessorKey: 'remark',
            },
            {
                header: " Data ID ",
                enableEditing: false,
                accessorKey: '_id',

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

    )


    const addColumns = useMemo(
        () => [

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
                accessorKey: "Amount",
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
           
            const filterData = props.data.filter(item => item.status === false || item.status === null)
            const data = filterData.map((item, i) => {
              
                return {
                    status: (item.status === null) ? <p className='text-danger'>Not approved</p> : (item.status === false ? <p className='text-danger'>Rejected</p> : ""),
                    remark: decrypt(item.remark),
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



    const handleCreateNewRow = async (values) => {

        delete values._id;
        delete values.status;

        const { ApplicantMobile, BGclaimDate, EmailIDApplicant, Amount, projectID, projectName, swiftCode, EmailIDbank, EmailIDsbi, ExpiryDateBG, applicantIDnumber, applicantName, ifscCode, issueDate, issuingBankName, issuingBranchName } = values
        const encryptData = {
            "ApplicantMobile": encrypt(ApplicantMobile),
            "BGclaimDate": encrypt(BGclaimDate),
            "EmailIDApplicant": encrypt(EmailIDApplicant),
            "Amount": encrypt(Amount),
            "EmailIDbank": encrypt(EmailIDbank),
            "EmailIDsbi": encrypt(EmailIDsbi),
            "ExpiryDateBG": encrypt(ExpiryDateBG),
            "applicantIDnumber": encrypt(applicantIDnumber),
            "applicantName": encrypt(applicantName),
            "ifscCode": encrypt(ifscCode),
            "issueDate": encrypt(issueDate),
            "issuingBankName": encrypt(issuingBankName),
            "issuingBranchName": encrypt(issuingBranchName),
            "projectID": encrypt(projectID),
            "projectName": encrypt(projectName),
            "swiftCode": encrypt(swiftCode),
        }

        await postBGForm(encryptData)
        await dispatch(getBGForm())
    };

    const [update, setUpdate] = useState({});

    const getUpadteData = (values) => {

        setUpdate({
            ...update,
            _id: values._id,
            status: null,
            "ApplicantMobile": encrypt(values.ApplicantMobile),
            "BGclaimDate": encrypt(values.BGclaimDate),
            "EmailIDApplicant": encrypt(values.EmailIDApplicant),
            "Amount": encrypt(values.Amount),
            "EmailIDbank": encrypt(values.EmailIDbank),
            "EmailIDsbi": encrypt(values.EmailIDsbi),
            "ExpiryDateBG": encrypt(values.ExpiryDateBG),
            "applicantIDnumber": encrypt(values.applicantIDnumber),
            "applicantName": encrypt(values.applicantName),
            "ifscCode": encrypt(values.ifscCode),
            "issueDate": encrypt(values.issueDate),
            "issuingBankName": encrypt(values.issuingBankName),
            "issuingBranchName": encrypt(values.issuingBranchName),
            "projectID": encrypt(values.projectID),
            "projectName": encrypt(values.projectName),
            "swiftCode": encrypt(values.swiftCode),

        });

    }

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;

            await patchBGForm(update)
            //send/receive api updates here, then refetch or update local table data for re-render
            // setTableData([...tableData]);
            await dispatch(getBGForm())
            exitEditingMode(); //required to exit editing mode and close modal
        }
    };


    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };









    return (
        <>
            <Header title={"Bankgurantee list for deo"} />
            <div className="mx-3">

                <MaterialReactTable
                    displayColumnDefOptions={{
                        'mrt-row-actions': {
                            muiTableHeadCellProps: {
                                align: 'center',
                            },
                            size: 120,
                        },

                    }}
                    initialState={{ columnVisibility: { _id: false } }}
                    columns={columns}
                    data={tableData}
                    editingMode="modal" //default
                    // enableColumnOrdering
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingRowCancel={handleCancelRowEdits}
                    renderRowActions={({ row, table }) => (
                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Tooltip arrow placement="left" title="Edit">
                                <IconButton onClick={() => { table.setEditingRow(row); getUpadteData(row.original) }}>

                                    <Edit />
                                </IconButton>
                            </Tooltip>

                        </Box>
                    )}
                    renderTopToolbarCustomActions={() => (
                        <Button
                            color="secondary"
                            onClick={() => setCreateModalOpen(true)}
                            variant="contained"
                        >
                            Add New BG
                        </Button>
                    )}
                />
                <CreateNewAccountModal
                    columns={addColumns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </div>


        </>
    )
}
//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Add New BG</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                onChange={(e) =>
                                    setValues({ ...values, [e.target.name]: e.target.value })
                                }
                            />
                        ))}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
