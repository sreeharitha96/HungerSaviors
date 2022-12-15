import { createSlice } from "@reduxjs/toolkit";
import {findItemsThunk} from "../services/nutrients-thunks";

const initialState = {
    items: [],
    itemsLoading: true
}

const itemsSlice = createSlice({
                                   name: "itemsData",
                                   initialState,
                                   extraReducers: {
                                       [findItemsThunk.pending]:
                                           (state) => {
                                               state.itemsLoading = true
                                               state.items = []
                                           },
                                       [findItemsThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.itemsLoading = false
                                               state.items = payload
                                               console.log("reducer " + state.items)
                                           },
                                       [findItemsThunk.rejected]:
                                           (state) => {
                                               state.itemsLoading = false
                                           }
                                   }
                               });
export default itemsSlice.reducer;