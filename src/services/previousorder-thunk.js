import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./previousorder-service"

export const findPreviousOrdersByCustomernameThunk = createAsyncThunk(
  'order/findPreviousOrdersByCustomername', async (customername) =>{
    const orders= await service.findPreviousOrdersByCustomername(customername)
    return orders
  }
)