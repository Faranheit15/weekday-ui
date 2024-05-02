import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobData } from "@/store/redux/jobsSlice";
import JobsGrid from "@/components/JobsGrid";

const JobCards = () => {
  const dispatch = useDispatch();
  // Accessing job-related state from the Redux store
  const { jobs, isLoading, hasMore } = useSelector((state) => state.jobs);

  useEffect(() => {
    // Function to handle infinite scrolling
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page and if data isn't currently loading
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      ) {
        return; // If not at bottom or if data is loading, exit the function
      }
      dispatch(fetchJobData()); // Dispatch an action to fetch more job data
    };

    // Attach scroll event listener to the window
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, isLoading, hasMore]); // Dependencies for the effect

  useEffect(() => {
    // Initial data fetch when the component mounts
    dispatch(fetchJobData());
  }, [dispatch]); // Ensuring dispatch is a stable dependency

  // Render the JobsGrid component passing down the jobs data
  return <JobsGrid jobs={jobs} />;
};

export default JobCards;
