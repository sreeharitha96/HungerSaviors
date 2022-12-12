import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./donor-service.js"
import {findDonorById} from "./donor-service";

export const findDonorThunk = createAsyncThunk(
    'donor/findDonors', async (status) =>
        await service.findDonors(status)
)
export const findDonorByUsernameThunk = createAsyncThunk(
    'donor/findDonorById',
    async(donorId) => {
<<<<<<< HEAD
       const donor= await service.findDonorByUsername(donorId)
       console.log(donor)
        return donor
=======
        return await service.findDonorByUsername(donorId)
>>>>>>> 6e86d1f0ceea50eba9146401c0592f3fffb9328a
    }
)
export const deleteDonorThunk = createAsyncThunk(
    'donor/deleteDonor', async(donorId) => {
        await service.deleteDonor(donorId)
        return donorId
    }
)
export const createDonorThunk = createAsyncThunk(
    'donor/createDonor', async (thunkAPI) =>
        await service.createDonor(thunkAPI)
)
export const updateDonorThunk = createAsyncThunk(
    'donor/updateDonor', async (donor) => {
        await service.updateDonor(donor)
        return donor
        // return donor._id
        // console.log("thunk: " + donor);
    }
)
export const approveDonorThunk = createAsyncThunk(
    'donor/approveDonor', async (donorId) => {
<<<<<<< HEAD
        await service.approveDonor(donorId)
        return donorId
=======
        return await service.approveDonor(donorId)
>>>>>>> 6e86d1f0ceea50eba9146401c0592f3fffb9328a
    }
)