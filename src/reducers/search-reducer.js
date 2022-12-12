import { createSlice } from "@reduxjs/toolkit";

import {findDonorsByCitynameThunk}
  from "../services/search-thunk.js";

const initialState = {
    donors: [],
    loading3: false
}

const searchSlice = createSlice({
    name: 'donors',
    initialState,
    extraReducers: {
        [findDonorsByCitynameThunk.pending]:
           (state) => {
              state.loading3 = true
              state.donors = []
        },
        [findDonorsByCitynameThunk.fulfilled]:
           (state, { payload }) => {
              state.loading3 = false
              state.donors = payload
        },
        [findDonorsByCitynameThunk.rejected]:
           (state) => {
              state.loading3 = false
        },
     
       }
   
});
   
export default searchSlice.reducer;