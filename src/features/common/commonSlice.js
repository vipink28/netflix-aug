import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";

const initialState = {
    headerVideo: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderVideo = createAsyncThunk(
    'common/fetchHeaderVideo',
    async (details) => {
        const response = await axios(requests.getVideoById(details));
        return response.data;
    }
)


const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderVideo.pending, (state, action) => {
                state.headerVideo.status = "loading";
            })
            .addCase(fetchHeaderVideo.fulfilled, (state, action) => {
                state.headerVideo.status = "success";
                state.headerVideo.data = action.payload;
            })
            .addCase(fetchHeaderVideo.rejected, (state, action) => {
                state.headerVideo.status = "failed";
                state.headerVideo.error = action.error;
            })
    }
})

export const headerVideoSelector = (state)=>state.common.headerVideo;

export default commonSlice.reducer;