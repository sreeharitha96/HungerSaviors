import axios from 'axios';
const PREVIOUSORDER_API_URL = 'http://localhost:4000/api/orders/ordersCustomer';


export const findPreviousOrdersByCustomername  = async (customername)     => {
 const response = await axios.get(`${PREVIOUSORDER_API_URL}/${customername}`);
 const orders = response.data;
 console.log(customername)
 console.log(orders)
 return orders;
 
}