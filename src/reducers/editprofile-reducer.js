import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
 name: 'profile',
 initialState: [],
 reducers: {
   createProfile(state, action) {
     const data = {
       ...state,
       ...action.payload
     }  
     return data;
   },

 }
});

export const {createProfile} = profileSlice.actions;
export default profileSlice.reducer;