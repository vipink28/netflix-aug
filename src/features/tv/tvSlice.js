// initial state

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";


const initialState = {
    netflixOriginals:{
        status:"idle",
        data:null,
        error: null
    }
}

export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
      const response = await axios.get(requests.getNetflixOriginals);
      return response.data;
    }
  );



export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchNetflixOriginals.pending, (state, action)=>{
        state.netflixOriginals.status = "loading";
    })
    .addCase(fetchNetflixOriginals.fulfilled, (state, action)=>{
        state.netflixOriginals.status = "success";
        state.netflixOriginals.data = action.payload;
    })
  }
})

export const netflixOriginalsSelector = (state)=>state.tv.netflixOriginals;

export default tvSlice.reducer;