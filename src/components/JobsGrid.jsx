import { Container, Grid } from "@mui/material";
import JobCard from "./JobCard";

const JobsGrid = ({ jobs }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobsGrid;
