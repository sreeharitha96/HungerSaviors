import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./userprofile-service";


export const findUserByIdThunk = createAsyncThunk(
    'profile/findCustomerById',
    async () => await service.findUserById()
)

export const findUserByUsernameThunk = createAsyncThunk(
    'profile/findUserByUsername',
    async (username) => {
        const user= await service.findUserByUserName(username)
        const customer= user
        return customer
    }

)

export const updateUserThunk = createAsyncThunk(
    'profile/updateUser',
    async (userprofile) => {
         const upuser= await service.updateUser(userprofile) 
         return upuser

    }  
  
)