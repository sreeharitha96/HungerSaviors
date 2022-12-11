import axios from 'axios';
const DONOR_API = 'http://localhost:4000/api/donors';
// const TUITS_API = 'https://tuiter-node-server-app-rak.herokuapp.com/api/tuits';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

export const createDonor = async (donor) => {
    const response = await axios.post(DONOR_API, donor)
    return response.data;
}
export const findDonors = async (status) => {
    const response = await axios.get(`${DONOR_API}/status/${status}`)
    const donors = response.data;
    return donors;
}
export const findDonorByUsername = async (did) => {
    const response = await axios.get(`${DONOR_API}/${did}`)
    const donor = response.data
    return donor
}
export const deleteDonor = async (did) => {
    const response = await axios.delete(`${DONOR_API}/${did}`)
    return response.data
}
export const updateDonor = async (donor) => {
    // const response = await axios.put(`${DONOR_API}/${donor._id}`, donor)
    // return response.data
    await axios.put(`${DONOR_API}/${donor._id}`, donor)
    return donor;
}
export const approveDonor = async (did) => {
    const response = await axios.patch(`${DONOR_API}/approve/${did}`)
    return response.data
}