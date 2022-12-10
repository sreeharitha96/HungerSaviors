import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./userprofile-service";


export const findUserByIdThunk = createAsyncThunk(
    'profile/findCustomerById',
    async () => await service.findUserById()
)

export const updateUserThunk = createAsyncThunk(
    'profile/updateCustomer',
    async (userprofile) => {
        console.log(userprofile)
         const upuser= await service.updateUser(userprofile) 
         console.log("upuser in thunk: " + JSON.stringify(upuser))
         return upuser

    }  
  
)