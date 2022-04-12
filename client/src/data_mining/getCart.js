import axios from "axios";


export const getCart = async (id) => {
    let data;
    try {
        const response = await axios.get(`/api/v1/users/${id}`, {})
        const user = await response.data
        data = await user.data.user.cart
        return data;
    } catch (e) {
        console.log(e)
    }
}