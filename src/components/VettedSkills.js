import {
  Box,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import iconSvg from "../images/VettedSkills.svg";
import reactIcon from "../images/React.svg";
import approvedIcon from "../images/Aproved.svg";
import RatingBox from "./RatingBox";
import VettedSkilsPopup from "./VettedSkilsPopup";

const VettedSkills = () => {
  return (
    <Box
      sx={{
        mt: { xs: "22px", md: "28px" },
        display: { md: "flex", xs: "block" },
        gap: { xs: "26px", xl: "60px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "20px",
          mb: { xs: "14px", md: 0 },
          width: { xl: "230px", md: "195px", xs: "188px" },
        }}
      >
        {" "}
        <img src={iconSvg} alt="Icon" style={{ marginRight: "6px" }} />
        Vetted Skills
      </Typography>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "16px",
            mb: "10px",
          }}
        >
          This developer passed 3+ hours of rigorous for the following skills
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "16px",
            color: "#6B6B6B",
            mb: "39px",
          }}
        >
          <HelpIcon
            sx={{
              mr: "8px",
              fill: "#EBEBEB",
              transform: "translate(0,6px)",
            }}
          />
          What is a Vetted skill? Learn more about our skill assessment
          methodology
        </Typography>
        <Accordion
          sx={{
            background: "#F7F7FA",
            p: { md: "22px 24px", xs: "16px 12px" },
            position: "relative",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandCircleDownOutlinedIcon
                sx={{
                  fontSize: "32px",
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              component="img"
              src={approvedIcon}
              alt="approved"
              sx={{ position: "absolute", top: "-40px", left: "-25px" }}
            />
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#373AF5", fontSize: "22px" }}>
                <Box
                  component="img"
                  src={reactIcon}
                  alt="react"
                  sx={{ marginRight: "6px", transform: "translate(0px,6px)" }}
                />
                React
              </Typography>
              <Box
                sx={{
                  borderRadius: "20px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  p: "4px 14px",
                  mr: "7px",
                }}
              >
                <RatingBox value={4.2} />
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <VettedSkilsPopup
              array={[
                { name: "DOM", value: 4.5 },
                { name: "HTML", value: 4.2 },
                { name: "CSS", value: 4.5 },
                { name: "Javascript", value: 4.8 },
                { name: "React", value: 4.3 },
              ]}
              title="Quiz"
              subtitle="Includes 15 questions on the following topics"
              buttonName="See Quiz results"
            />
            <Divider sx={{ m: "20px 0" }} />
            <VettedSkilsPopup
              array={[
                { name: "Sorting algorithm", value: 4.2 },
                { name: "Strings and arrays", value: 4.5 },
                { name: "Complexity", value: 4.3 },
              ]}
              title="Coding Challenge"
              subtitle="Includes 3 tasks on coding skills"
              buttonName="See Code"
            />
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ m: "28px 0" }} />
      </Box>
    </Box>
  );
};

export default VettedSkills;
