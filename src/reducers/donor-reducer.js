import { createSlice} from "@reduxjs/toolkit";
// import donorArray from "../data/donor.json";
import {findDonorByIdThunk, findDonorThunk} from "../services/donor-thunks";

const initialState = {
    donors: [],
    loading: false,
    donor:[],
    loading2: false
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
            },
        [findDonorByIdThunk.pending]: (state) => {
            state.loading2 = true
            state.donor = []
        },
        [findDonorByIdThunk.fulfilled]: (state, action) => {
            state.loading2 = false
            state.donor = action.payload
        },
        [findDonorByIdThunk.rejected]: (state) => {
            state.loading2 = true
        }
    }
                               });
export default donorSlice.reducer;