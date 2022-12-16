import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./order-service";

export const findOrderThunk = createAsyncThunk(
    'order/findOrders', async() =>
        await service.findOrders()
)
export const findOrderByDonorIdThunk = createAsyncThunk(
    'order/findOrderByDonorId', async(donorId) =>
        await service.findOrderByDonorId(donorId)
)
export const findOrderByCustomerIdThunk = createAsyncThunk(
    'order/findOrderByCustomerId', async(cid) =>
        await service.findOrderByCustomerId(cid)
)
export const createOrderThunk = createAsyncThunk(
    'order/createOrder', async (thunkAPI) => {
        await service.createOrder(thunkAPI)
    }
)
