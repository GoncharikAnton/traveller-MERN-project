import axios from "axios";


export const getTours = async () => {
    let data = [];
    try {
        const response = await axios.get(`/api/v1/tours`, {})
        data = await response.data

    } catch (e) {
        console.log(e)
    }
    return data;
}

export const getToursByCategory = async () => {
    let data = [];
    try {
        const response = await axios.get(`/api/v1/tours`, {})
        data = await response.data

    } catch (e) {
        console.log(e)
    }
    return data;
}