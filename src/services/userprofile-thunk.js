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
    // console.log("username in thunk: ", username)
    // console.log("user in thunk: ", user)
    const customer= user
    console.log(customer)
    return customer
    }

)

export const updateUserThunk = createAsyncThunk(
    'profile/updateUser',
    async (userprofile) => {
        // console.log(userprofile)
         const upuser= await service.updateUser(userprofile) 
        //  console.log("upuser in thunk: " + JSON.stringify(upuser))
         return upuser

    }  
  
)