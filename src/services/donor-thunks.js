import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./donor-service"
import {findDonorById} from "./donor-service";

export const findDonorThunk = createAsyncThunk(
    'donor/findDonors', async () =>
        await service.findDonors()
)
export const findDonorByIdThunk = createAsyncThunk(
    'donor/findDonorById',
    async(donorId) => await findDonorById(donorId)
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
        // return donor
        // return donor._id
        console.log("thunk: " + donor);
    }

)