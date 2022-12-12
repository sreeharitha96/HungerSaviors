import axios from 'axios';

const ORDER_API = 'http://localhost:4000/api/orders';

export const createOrder = async (order) => {
    const response = await axios.post(ORDER_API, order)
    console.log(order)
    return response.data;
}
export const findOrders = async () => {
    const response = await axios.get(ORDER_API)
    return response.data;
}
export const findOrderByDonorId = async (did) => {
    const response = await axios.get(`${ORDER_API}/ordersDonor/${did}`)
    return response.data
}
export const findOrderByCustomerId = async (cid) => {
    const response = await axios.get(`${ORDER_API}/ordersCustomer/${cid}`)
    return response.data
}