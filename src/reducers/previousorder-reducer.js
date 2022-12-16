import { createSlice } from "@reduxjs/toolkit";
import {findOrderByDonorIdThunk} from "../services/order-thunks";
import {findPreviousOrdersByCustomernameThunk}
  from "../services/previousorder-thunk";

const initialState = {
    orders: [],
    loading4: false,
    previousorders:[],
    previousordersloading:false
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
        [findOrderByDonorIdThunk.pending]:
            (state) => {
                state.previousordersloading = true
                state.previousorders = []
            },
        [findOrderByDonorIdThunk.fulfilled]:
            (state, {payload}) => {
            state.previousordersloading = false
                state.previousorders = payload
            },
        [findOrderByDonorIdThunk.rejected]:
            (state) => {
            state.previousordersloading = false
            }
     
       }
   
});
   
export default orderSlice.reducer;