import axios from "axios";
import { toast } from "react-toastify";

export const postDocument = async (fromData) => {
    try {

        const { data } = await axios.post('/bg-document', fromData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        toast.success("Image upload Successfully", {
            position: "top-center",
        });

        return data;

    } catch (error) {
        toast.error(error.response.data.message, {
            position: "top-center",

        });
    }
}


export const deleteImage = async (data) => {
    try {

        const response = await axios.post('/delete-image', { data: data })

        toast.success(response.data.message, {
            position: "top-center",
        });

    } catch (error) {
        toast.error(error.response.data.message, {
            position: "top-center",
        });
    }

}