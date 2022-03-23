import axios from "axios";


export const getTours = async (category = null, id = null) => {              //  +++++++ getToursByCategory
    let data = [];
    let request = ''
    console.log(category, id)
    switch (category, id){
        case !!category:
            request = `?category=${category}`
            return
        case !!id:
            request = `/${id}`
            return
        default:
            request = ''
    }
    try {
        const response = await axios.get(`/api/v1/tours`, {})
        data = await response.data
    } catch (e) {
        console.log(e)
    }
    return data;
}