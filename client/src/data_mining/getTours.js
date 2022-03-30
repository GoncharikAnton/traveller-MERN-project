import axios from "axios";


export const getTours = async (category , id ) => {
    let data = [];
    let request = ''
    switch (true){
        case !!category:
            request = `?category=${category}`
            break
        case !!id:
            request = `/${id}`
            break
        default:
            request = ''
    }
    try {
        const response = await axios.get(`/api/v1/tours${request}`, {})
        data = await response.data
    } catch (e) {
        console.log(e)
    }
    return data;
}