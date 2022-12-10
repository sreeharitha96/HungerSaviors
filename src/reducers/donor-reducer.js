import { createSlice} from "@reduxjs/toolkit";
// import donorArray from "../data/donor.json";
import {
    findDonorByUsernameThunk,
    findDonorThunk,
    updateDonorThunk
} from "../services/donor-thunks";

const initialState = {
    donors: [],
    loading: false,
    donor: [],
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
        [findDonorThunk.rejected]: (state) => {
            state.loading = false
        },
        [findDonorByUsernameThunk.pending]: (state) => {
            state.loading2 = true
            state.donor = []
        },
        // [findDonorByIdThunk.fulfilled]: (state, action) => {
        //     state.loading2 = false
        //     state.donor = action.payload
        // },
        [findDonorByUsernameThunk.fulfilled]: (state, {payload}) => {
            state.loading2 = false
            state.donor = payload
        },
        [findDonorByUsernameThunk.rejected]: (state) => {
            state.loading2 = false
        },
        [updateDonorThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.donor = payload
            // console.log('payload', payload)
            // const donorIndex = state.donors.findIndex((donor) =>  {
            //     console.log(donor)
            // //    console.log(typeof (donor._id))
            //     // console.log(typeof (payload._id))
            //     return donor._id === payload._id
            // })
            // console.log('donorIndex')
            // console.log(donorIndex)
            // state.donor = payload
            // {
            //     ...state.donor[donorIndex],
            //     ...payload
            // }
        }
    }
});
export default donorSlice.reducer;