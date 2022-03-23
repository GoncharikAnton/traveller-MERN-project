import axios from "axios";


export const getTours = async (category = null) => {              //  +++++++ getToursByCategory
    let data = [];
    try {
        const response = !category ? await axios.get(`/api/v1/tours`, {}) :
            await axios.get(`/api/v1/tours?category=${category}`, {})
        data = await response.data

    } catch (e) {
        console.log(e)
    }
    return data;
}