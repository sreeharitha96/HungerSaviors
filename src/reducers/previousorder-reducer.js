import { createSlice } from "@reduxjs/toolkit";

import {findPreviousOrdersByCustomernameThunk}
  from "../services/previousorder-thunk";

const initialState = {
    orders: [],
    loading4: false
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: {
        [findPreviousOrdersByCustomernameThunk.pending]:
           (state) => {
              state.loading4 = true
              state.orders = []
        },
        [findPreviousOrdersByCustomernameThunk.fulfilled]:
           (state, { payload }) => {
              state.loading4 = false
              state.orders = payload
        },
        [findPreviousOrdersByCustomernameThunk.rejected]:
           (state) => {
              state.loading4 = false
        },
     
       }
   
});
   
export default orderSlice.reducer;