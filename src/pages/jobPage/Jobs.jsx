import { useState } from "react";
import { Grid, Container } from "@mui/material";
import Input from "@/components/Input";
import Select from "@/components/Select";
import JobCards from "@/pages/jobPage/JobCards";

const Jobs = () => {
  const [role, setRole] = useState([]);
  const [noOfEmployees, setNoOfEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [minimumBasePaySalary, setMinimumBasePaySalary] = useState([]);
  const [searchText, setSearchText] = useState("");

  const roleOptions = [
    {
      groupLabel: "Engineering",
      items: [
        { value: "backend", label: "Backend" },
        { value: "frontend", label: "Frontend" },
        { value: "fullstack", label: "Fullstack" },
      ],
    },
    {
      groupLabel: "Design",
      items: [
        { value: "ux", label: "UX Design" },
        { value: "ui", label: "UI Design" },
      ],
    },
    {
      groupLabel: "Operations",
      items: [
        { value: "hr", label: "Human Resources" },
        { value: "op", label: "Operations" },
      ],
    },
  ];
  const noOfEmployeesOptions = [
    {
      groupLabel: "No. of Employees",
      items: [
        { value: "1-10", label: "1-10" },
        { value: "11-20", label: "11-20" },
        { value: "21-50", label: "21-50" },
        { value: "51-100", label: "51-100" },
        { value: "100+", label: "100+" },
      ],
    },
  ];
  const experienceOptions = [
    {
      groupLabel: "Experience",
      items: [
        { value: "1-2", label: "1-2" },
        { value: "2-5", label: "2-5" },
        { value: "5-10", label: "5-10" },
        { value: "10-20", label: "10-20" },
        { value: "20+", label: "20+" },
      ],
    },
  ];
  const remoteOptions = [
    {
      groupLabel: "Remote",
      items: [
        { value: "remote", label: "Remote" },
        { value: "hybird", label: "Hybrid" },
        { value: "inOffice", label: "In Office" },
      ],
    },
  ];
  const minimumBasePaySalaryOptions = [
    {
      groupLabel: "Minimum Base Pay",
      items: [
        { value: "10k", label: "10K" },
        { value: "20k", label: "20K" },
        { value: "30k", label: "30K" },
        { value: "40k", label: "40K" },
        { value: "50k", label: "50K" },
      ],
    },
  ];
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Select
            label="Roles"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            options={roleOptions}
            mode="multiple"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            label="No. of Employees"
            value={noOfEmployees}
            onChange={(event) => setNoOfEmployees(event.target.value)}
            options={noOfEmployeesOptions}
            mode="multiple"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            label="Experience"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            options={experienceOptions}
            mode="single"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            label="Job Type"
            value={jobType}
            onChange={(event) => setJobType(event.target.value)}
            options={remoteOptions}
            mode="multiple"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            label="Minimum Base Pay"
            value={minimumBasePaySalary}
            onChange={(event) => setMinimumBasePaySalary(event.target.value)}
            options={minimumBasePaySalaryOptions}
            mode="single"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Input
            label="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Grid>
      </Grid>
      <JobCards />
    </Container>
  );
};

export default Jobs;
