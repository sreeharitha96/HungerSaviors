import { createSlice } from "@reduxjs/toolkit";
import {findUserByUsernameThunk, updateUserThunk} from '../services/userprofile-thunk.js';

const initialState = {
    userprofile: [],
    loading: false,
    loading2: false

}


const profileSlice = createSlice({
    name: 'userprofile',
    initialState,
    extraReducers: {
      [findUserByUsernameThunk.pending]:
         (state) => {
            state.loading = true
            state.userprofile = []
      },
      [findUserByUsernameThunk.fulfilled]:
         (state, {payload} ) => {
            state.loading = false
            state.userprofile = payload
      },
      [findUserByUsernameThunk.rejected]:
         (state) => {
            state.loading = false
      },
      [updateUserThunk.fulfilled]: (state, {payload}) => {
        state.loading2 = false
        state.userprofile = payload
    }
     
    //  [updateUserThunk.fulfilled]:
    //  (state, { payload }) => {
    //    state.loading = false
    // //    const profileNdx = state.profile
    // //      .findIndex((t) => t._id === payload._id)
    //    state.profile = {
    //      ...state.profile,
    //      ...payload
    //    }
    //  }
   
    }
   
});
   
export default profileSlice.reducer;