import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "@/store/redux/jobsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
