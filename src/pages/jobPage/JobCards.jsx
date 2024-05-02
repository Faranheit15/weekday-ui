import React, { useState, useEffect } from "react";
import JobsGrid from "@/components/JobsGrid";
import axios from "axios";

const JobCards = () => {
  // State to store job listings
  const [jobs, setJobs] = useState([]);
  // State to track the current offset for pagination
  const [offset, setOffset] = useState(0);
  // State to track if a request is currently being processed
  const [isLoading, setIsLoading] = useState(false);
  // State to determine if there are more jobs to be loaded
  const [hasMore, setHasMore] = useState(true);

  const fetchJobData = async () => {
    // Prevent fetching if already loading or no more jobs are available
    if (isLoading || !hasMore) return;

    const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    const requestData = {
      limit: 10, // Number of jobs to fetch per request
      offset: offset, // Current offset, start from 0
    };

    setIsLoading(true); // Set loading state to true to prevent multiple requests
    try {
      const response = await axios.post(url, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Append new jobs to the existing jobs array
      setJobs((prevJobs) => [...prevJobs, ...response.data.jdList]);
      // Increment the offset by the number of jobs just fetched
      setOffset((prevOffset) => prevOffset + response.data.jdList.length);
      // Check if there are more jobs to load
      setHasMore(response.data.jdList.length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false); // Reset loading state once request is complete
  };

  // Effect to attach a scroll event listener to the window
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      )
        return;
      fetchJobData(); // Fetch more jobs if bottom of the page is reached
    };

    window.addEventListener("scroll", handleScroll); // Attach the event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener
  }, [isLoading, hasMore]); // Dependencies to re-attach the listener when isLoading or hasMore changes

  // Initial fetch of data when component mounts
  useEffect(() => {
    fetchJobData();
  }, []);

  // Render the JobsGrid component with jobs passed as a prop
  return <JobsGrid jobs={jobs} />;
};

export default JobCards;
