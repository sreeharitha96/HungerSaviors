import { createSlice} from "@reduxjs/toolkit";
// import donorArray from "../data/donor.json";
import {findDonorThunk} from "../services/donor-thunks";

const initialState = {
    donors: [],
    loading: false
}

const donorSlice = createSlice({
    name: "donorsData",
    initialState,
    extraReducers: {
        [findDonorThunk.pending]:
            (state) => {
            state.loading = true
            state.donors = []
            },
        [findDonorThunk.fulfilled]:
            (state, {payload}) => {
            state.loading = false
            state.donors = payload
            },
        [findDonorThunk.rejected]:
            (state) => {
            state.loading = false
            }
    }
                               });
export default donorSlice.reducer;