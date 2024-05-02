import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state of the jobs slice
const initialState = {
  jobs: [], // Array to store job listings
  offset: 0, // Offset for pagination control
  isLoading: false, // Boolean to track if data is currently being fetched
  hasMore: true, // Boolean to check if more jobs are available to fetch
};

/**
 * Asynchronous thunk action to fetch job data.
 * Uses Redux Toolkit's createAsyncThunk for handling async operations.
 * This thunk takes no action payload, but uses the Redux state to manage API request parameters.
 */
export const fetchJobData = createAsyncThunk(
  "jobs/fetchJobData",
  async (_, { getState }) => {
    const state = getState();
    // Extract the current offset and jobs from the jobs state
    const { offset, jobs } = state.jobs;

    // Make a POST request to the server with axios
    const response = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        limit: 10, // Number of jobs to fetch per request
        offset: offset, // Start fetching from the current offset
      },
      {
        headers: {
          "Content-Type": "application/json", // Set the content type of the request
        },
      }
    );
    // Return job data from the response to update the state
    return response.data.jdList;
  }
);

// Create a slice for jobs with createSlice
export const jobsSlice = createSlice({
  name: "jobs", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducers for other actions can be added here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobData.pending, (state) => {
        // Handle state before the API request is made
        state.isLoading = true;
      })
      .addCase(fetchJobData.fulfilled, (state, action) => {
        // Handle state after the API request succeeds
        state.jobs = [...state.jobs, ...action.payload]; // Append new jobs to the existing list
        state.offset += action.payload.length; // Update the offset by the number of jobs fetched
        state.hasMore = action.payload.length > 0; // Determine if more jobs are available
        state.isLoading = false; // Set loading to false after data is fetched
      })
      .addCase(fetchJobData.rejected, (state) => {
        // Handle state after the API request fails
        state.isLoading = false;
      });
  },
});

export default jobsSlice.reducer;
