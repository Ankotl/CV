import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RatingBox from "./RatingBox";

const VettedSkilsPopup = ({ array, title, subtitle, buttonName }) => {
  const sizeOfBox = title === "Quiz" ? "242px" : "198px";
  const buttonMargin = title === "Quiz" ? "186px" : "142px";
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        pt: { xs: "16px", md: 0 },
        height: { md: "100%", xs: sizeOfBox },
      }}
    >
      <Box
        sx={{
          buttom: 0,
          justifyContent: "space-between",
          display: {
            md: "flex",
            xs: "block",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "18px", xs: "14px" },
            width: "143px",
            mb: { xs: "6px", md: 0 },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            color: "#6B6B6B",
            width: "247px",
            position: "absolute",
            left: { xl: "366px", md: "184px", xs: 0 },
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          ml: { xl: "225px", md: "41px", xs: 0 },
          justifyContent: "space-between",
          mt: { xs: "56px", md: "36px" },
          position: { xs: "absolute", md: "static" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "10px", xs: "6px" },
          }}
        >
          {array.map((elem) => (
            <Typography
              key={elem.name}
              sx={{
                fontSize: { md: "16px", xs: "12px" },
              }}
            >
              {elem.name}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "10px", xs: "6px" },
          }}
        >
          {array.map((elem) => (
            <Box sx={{ display: "flex" }} key={elem.name}>
              <RatingBox value={elem.value} />
            </Box>
          ))}
        </Box>
      </Box>

      <Button
        sx={{
          mt: { md: "52px", xs: buttonMargin },
          width: { md: "160px", xs: "264px" },
          textAlign: "center",
          color: "#373AF5",
          textTransform: "none",
          borderRadius: "8px",
          position: "absolute",
          display: "inline-block",
        }}
        variant="outlined"
      >
        {buttonName}
      </Button>
    </Box>
  );
};

export default VettedSkilsPopup;
