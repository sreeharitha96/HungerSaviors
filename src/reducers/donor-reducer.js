import { createSlice} from "@reduxjs/toolkit";
import {
  findDonorByUsernameThunk,
  findDonorThunk,
  updateDonorThunk,
} from '../services/donor-thunks';

const initialState = {
  donors: [],
  donorsloading: true,
  donor: [],
  loading2: true,
};

const donorSlice = createSlice({
  name: 'donorsData',
  initialState,
  extraReducers: {
    [findDonorThunk.pending]: (state) => {
      state.donorsloading = true;
      state.donors = [];
    },
    [findDonorThunk.fulfilled]: (state, { payload }) => {
      state.donorsloading = false;
      state.donors = payload;
    },
    [findDonorThunk.rejected]: (state) => {
      state.donorsloading = false;
    },
    [findDonorByUsernameThunk.pending]: (state) => {
      state.loading2 = true;
      state.donor = [];
    },
    // [findDonorByIdThunk.fulfilled]: (state, action) => {
    //     state.loading2 = false
    //     state.donor = action.payload
    // },
    [findDonorByUsernameThunk.fulfilled]: (state, { payload }) => {
      state.loading2 = false;
      state.donor = payload;
    },
    [findDonorByUsernameThunk.rejected]: (state) => {
      state.loading2 = false;
    },
    [updateDonorThunk.fulfilled]: (state, { payload }) => {
      state.donorsloading = false;
      state.donor = payload;
    },
  },
});
export default donorSlice.reducer;
