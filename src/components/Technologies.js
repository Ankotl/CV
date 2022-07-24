import { Box, Divider, Typography } from "@mui/material";
import techSvg from "../images/Tech.svg";
import HelpIcon from "@mui/icons-material/Help";
import SkillList from "./SkillList";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Technologies = () => {
  const { languages, technologies } = useContext(UserContext);
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
        <Box
          component="img"
          src={techSvg}
          alt="Icon"
          sx={{ marginRight: "6px" }}
        />
        Technologies stack
      </Typography>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            fontFamily: "Cabin",
          }}
        >
          Current stack
          <HelpIcon
            sx={{
              ml: "8px",
              fill: "#EBEBEB",
              transform: "translate(0,6px)",
            }}
          />
        </Typography>
        <SkillList array={languages} title="Languages" />
        <SkillList array={technologies} title="Technologies" />
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            fontFamily: "Cabin",
            mb: "10px",
            mt: "26px",
          }}
        >
          Has experience in
          <HelpIcon
            sx={{
              ml: "8px",
              fill: "#EBEBEB",
              transform: "translate(0,6px)",
            }}
          />
        </Typography>

        <Box sx={{ display: "flex", gap: "14px" }}>
          <Typography variant="body1">Redux</Typography>
          <Typography variant="body1">Mobx</Typography>
          <Typography variant="body1">Express</Typography>
        </Box>
        <Divider sx={{ m: "28px 0" }} />
      </Box>
    </Box>
  );
};

export default Technologies;
