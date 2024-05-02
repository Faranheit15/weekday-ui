import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobData } from "@/store/redux/jobsSlice";
import JobsGrid from "@/components/JobsGrid";

const JobCards = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, hasMore } = useSelector((state) => state.jobs);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      ) {
        return;
      }
      dispatch(fetchJobData());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, isLoading, hasMore]);

  useEffect(() => {
    dispatch(fetchJobData());
  }, [dispatch]);

  return <JobsGrid jobs={jobs} />;
};

export default JobCards;
