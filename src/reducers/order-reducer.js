import { createSlice } from "@reduxjs/toolkit";
import {findOrderThunk} from "../services/order-thunks";

const initialState = {
    orders: [],
    ordersLoading: false
}

const orderSlice = createSlice({
    name: "ordersData",
    initialState,
    extraReducers: {
        [findOrderThunk.pending]:
            (state) => {
                state.ordersLoading = true
                state.orders = []
            },
        [findOrderThunk.fulfilled]:
            (state, {payload}) => {
            state.ordersLoading = false
                state.orders = payload
            },
        [findOrderThunk.rejected]:
            (state) => {
            state.ordersLoading = false
            }
    }
});
export default orderSlice.reducer;