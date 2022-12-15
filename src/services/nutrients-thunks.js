import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./nutrients-service.js"

export const findItemsThunk = createAsyncThunk(
    'search/items', async (item) =>
        await service.findItems(item)
)