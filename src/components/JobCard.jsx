import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from "@mui/material";

const JobCard = ({ job }) => {
  const salaryRange =
    job?.minJdSalary && job?.maxJdSalary
      ? `$${job?.minJdSalary}k - $${job?.maxJdSalary}k`
      : "Salary not disclosed";

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job?.jobRole}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {job?.location}
        </Typography>
        <Typography variant="body2">
          Experience: {job?.minExp} - {job?.maxExp} years
        </Typography>
        <Typography variant="body2">Salary: {salaryRange}</Typography>
        <Typography variant="body1">
          {job?.jobDetailsFromCompany.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link
            href={job?.jdLink}
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
