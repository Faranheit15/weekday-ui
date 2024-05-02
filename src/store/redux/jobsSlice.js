import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jobs: [],
  offset: 0,
  isLoading: false,
  hasMore: true,
};

// Async thunk action
export const fetchJobData = createAsyncThunk(
  "jobs/fetchJobData",
  async (_, { getState }) => {
    const state = getState();
    const { offset, jobs } = state.jobs;

    const response = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        limit: 10,
        offset: offset,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.jdList;
  }
);

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // Additional reducers can be defined here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobData.fulfilled, (state, action) => {
      state.jobs = [...state.jobs, ...action.payload];
      state.offset += action.payload.length;
      state.hasMore = action.payload.length > 0;
      state.isLoading = false;
    });
    builder.addCase(fetchJobData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default jobsSlice.reducer;
