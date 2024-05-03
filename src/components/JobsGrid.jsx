import { Container, Grid } from "@mui/material";
import JobCard from "./JobCard";
import PropTypes from "prop-types";

const JobsGrid = ({ jobs }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {jobs.map((job, idx) => (
          <Grid item xs={12} sm={6} md={4} key={`${job?.jdUid}-${idx}`}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

JobsGrid.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object),
};

export default JobsGrid;
