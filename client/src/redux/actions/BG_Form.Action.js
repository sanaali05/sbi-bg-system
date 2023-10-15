import axios from 'axios'
import { toast } from 'react-toastify'

import * as actionType from '../constants/BG_Form.Constant'

export const getBGForm = () => async (dispatch) => {
    try {
        const response = await axios.get("/bank-gurantee")
        dispatch({ type: actionType.GET_BG_FORM_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: actionType.GET_BG_FORM_FAIL, payload: error.response.error })
    }
}

export const postBGForm = async (data) => {
    try {
       
        const response = await axios.post('/bank-gurantee', data)
        console.log(response)
        toast.success(response.data.message, { position: "top-center" });
    } catch (error) {
        toast.error(error.response.data.message, { position: "top-center" })
    }
}




export const patchBGForm = async (data) => {
console.log(data)
    try {
        const response = await axios.patch(`/bank-gurantee/${data._id}`, data)
        toast.success(response.data.message, {
            position: "top-center",
        });

    } catch (error) {
        toast.error(error.response.data.message, {
            position: "top-center",

        });
    }
}

export const changeStatus = async (update) => {
    try {
        const response = await axios.patch(`/bank-gurantee-status/${update.id}`,update);
       
        toast.success(response.data.message, {
            position: "top-center",
        });
    } catch (error) {
        toast.error(error.response.data.message, {
            position: "top-center",

        });
    }
}