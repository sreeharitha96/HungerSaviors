import axios from 'axios';
const SEARCH_API_URL = 'http://localhost:4000/api/search';


export const findDonorsByCityname  = async (cityname)     => {
 const response = await axios.get(`${SEARCH_API_URL}/city/${cityname}`);
 const donors = response.data;
 return donors;
}