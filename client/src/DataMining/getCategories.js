import axios from "axios";


export const getCategories = async () => {
    let data = [];
    try {
        const response = await axios.get(`/api/v1/category`, {})
        data = await response.data
    } catch (e) {
        console.log(e)
        return e
    }
    return data;
}