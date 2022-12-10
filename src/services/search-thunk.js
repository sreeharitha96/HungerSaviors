import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./search-service"

export const findDonorsByCitynameThunk = createAsyncThunk(
  'search/findDonorsByCityname', async (cityname) =>{
    const donors= await service.findDonorsByCityname(cityname)
    console.log(cityname)
    console.log(donors)
    return donors
  }
)