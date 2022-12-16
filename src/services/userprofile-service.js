import axios from "axios";
const USER_API_URL = 'http://localhost:4000/api/customers';
const USER='http://localhost:4000/api/customers/find';
const EDIT_USER_API_URL = 'http://localhost:4000/api/customers/639415773d6d6422fde751f4';


export const findUserById = async () => {
    const response = await axios.get(`${USER_API_URL}`)
    const user = response.data
    return user
}

export const findUserByUserName = async (username) => {
    const response = await axios.get(`${USER}/${username}`)
    const user = response.data
    return user
}

export const updateUser = async (userprofile) => {
    const response = await axios
      .put(`${USER_API_URL}/${userprofile.userName}`, userprofile);
    return userprofile;
}