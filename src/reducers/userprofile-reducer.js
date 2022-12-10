import { createSlice } from "@reduxjs/toolkit";
import {findUserByIdThunk, updateUserThunk} from '../services/userprofile-thunk.js';

const initialState = {
    userprofile: [],
    loading: false
}


const profileSlice = createSlice({
    name: 'userprofile',
    initialState,
    extraReducers: {
      [findUserByIdThunk.pending]:
         (state) => {
            state.loading = true
            state.userprofile = []
      },
      [findUserByIdThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            state.userprofile = payload
      },
      [findUserByIdThunk.rejected]:
         (state) => {
            state.loading = false
      },
     
     [updateUserThunk.fulfilled]:
     (state, { payload }) => {
       console.log(payload)
       state.loading = false
    //    const profileNdx = state.profile
    //      .findIndex((t) => t._id === payload._id)
       state.profile = {
         ...state.profile,
         ...payload
       }
     }
   
    }
   
});
   
export default profileSlice.reducer;