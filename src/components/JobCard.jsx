import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "@/util/helper";

const StyledCard = styled(Card)({
  width: 300,
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  margin: "5%",
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
});

const TopRow = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const InfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px",
});

const CompanyLogo = styled("img")({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "10px",
});

const StyledTypographyTitle1 = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "#808080",
});

const StyledTypographyTitle2 = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "#333333",
});

const StyledTypography = styled(Typography)({
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
  color: "#666666",
  position: "relative",
  maxHeight: "100px",
  overflow: "hidden",
});

const ContentFade = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50px",
  backgroundImage: "linear-gradient(transparent, white)",
});
const StyledChip = styled(Chip)({
  maxWidth: "max-content",
  marginBottom: "10px",
});

const ApplyButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#40E0D0",
  color: "white",
  "&:hover": {
    backgroundColor: "#38CCCC",
  },
  justifyContent: "flex-center",
  alignItems: "center",
  marginBottom: "10px",
});

const ReferralButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#4169E1",
  color: "white",
  "&:hover": {
    backgroundColor: "#375AC8",
  },
  justifyContent: "flex-center",
  alignItems: "center",
  marginBottom: "10px",
});

const ViewMoreLink = styled(Link)({
  cursor: "pointer",
  color: "#0066cc",
  textAlign: "center",
  display: "block",
  fontWeight: "bold",
});

const JobCard = ({ job }) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleShowFullText = () => setShowFullText(!showFullText);

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledChip
          icon={<HourglassEmptyIcon />}
          label="Posted 2 days ago"
          size="small"
          variant="outlined"
        />
        <TopRow>
          <CompanyLogo
            src={job?.companyLogoUrl || "https://picsum.photos/200/300"}
            alt="Company Logo"
          />
          <InfoContainer>
            <StyledTypographyTitle1>
              {job?.companyName ||
                ["Microsoft", "Apple", "Google", "Weekday", "Amazon"][
                  Math.floor(
                    Math.random() *
                      ["Microsoft", "Apple", "Google", "Weekday", "Amazon"]
                        .length
                  )
                ]}
            </StyledTypographyTitle1>
            <StyledTypographyTitle2>
              {capitalizeFirstLetter(job?.jobRole) || "Software Engineer"}
            </StyledTypographyTitle2>
            <StyledTypography>
              {capitalizeFirstLetter(job?.location) || "Redmond, WA"}
            </StyledTypography>
          </InfoContainer>
        </TopRow>
        <StyledTypography style={{ alignSelf: "flex-start" }}>
          Estimated Salary:{" "}
          {job?.minJdSalary && job?.maxJdSalary
            ? `${job.minJdSalary} - ${job.maxJdSalary} LPA ✅`
            : "Salary not disclosed"}
        </StyledTypography>
        <StyledTypographyTitle2>About Company:</StyledTypographyTitle2>
        <StyledTypographyTitle2 style={{ fontSize: "14px" }}>
          About us
        </StyledTypographyTitle2>

        <StyledTypography
          style={{
            position: "relative",
            maxHeight: showFullText ? "none" : "100px",
            overflow: "hidden",
          }}
        >
          {job?.jobDetailsFromCompany ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
          {!showFullText && <ContentFade />}
        </StyledTypography>
        {!showFullText && (
          <ViewMoreLink onClick={toggleShowFullText}>View More</ViewMoreLink>
        )}
        <StyledTypography style={{ alignSelf: "flex-start" }}>
          Minimum Experience:
        </StyledTypography>
        <StyledTypography style={{ alignSelf: "flex-start" }}>
          {job?.minExperience || "2 years"}
        </StyledTypography>
      </StyledCardContent>
      <CardActions style={{ flexDirection: "column", padding: "0 16px 16px" }}>
        <ApplyButton fullWidth startIcon={<EmojiEventsIcon />}>
          Easy Apply
        </ApplyButton>
        <ReferralButton
          fullWidth
          startIcon={
            <AvatarGroup max={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200/300"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Travis Howard"
                src="https://picsum.photos/200/300"
                sx={{ width: 24, height: 24 }}
              />
            </AvatarGroup>
          }
        >
          Unlock referral asks
        </ReferralButton>
      </CardActions>
    </StyledCard>
  );
};

export default JobCard;
