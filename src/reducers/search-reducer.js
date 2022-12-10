import { createSlice } from "@reduxjs/toolkit";

import {findDonorsByCitynameThunk}
  from "../services/search-thunk.js";

const initialState = {
    donors: [],
    loading: false
}

const searchSlice = createSlice({
    name: 'donors',
    initialState,
    extraReducers: {
        [findDonorsByCitynameThunk.pending]:
           (state) => {
              state.loading = true
              state.donors = []
        },
        [findDonorsByCitynameThunk.fulfilled]:
           (state, { payload }) => {
              state.loading = false
              state.donors = payload
        },
        [findDonorsByCitynameThunk.rejected]:
           (state) => {
              state.loading = false
        },
     
       }
   
});
   
export default searchSlice.reducer;