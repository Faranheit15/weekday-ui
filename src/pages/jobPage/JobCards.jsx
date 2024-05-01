import React, { useState, useEffect } from "react";
import JobsGrid from "@/components/JobsGrid";
import axios from "axios";

const JobCards = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobData = async () => {
    const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    const requestData = {
      limit: 10,
      offset: 0,
    };

    try {
      const response = await axios.post(url, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setJobs(response.data.jdList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchJobData();
  }, []);

  return <JobsGrid jobs={jobs} />;
};

export default JobCards;
