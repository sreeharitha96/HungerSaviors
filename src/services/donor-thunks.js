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
        return await service.findDonorByUsername(donorId)
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
    }
)
export const approveDonorThunk = createAsyncThunk(
    'donor/approveDonor', async (donorId) => {
        await service.approveDonor(donorId)
        return donorId
    }
)