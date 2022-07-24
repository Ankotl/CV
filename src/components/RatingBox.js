import React from "react";
import { Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RatingBox = ({ value }) => {
  return (
    <>
      <Typography variant="h5" sx={{ fontSize: "18px", mr: "8px" }}>
        {value}
      </Typography>
      <Rating
        icon={<StarIcon sx={{ color: "#373AF5" }} />}
        value={value}
        precision={0.1}
        readOnly
      />
    </>
  );
};

export default RatingBox;
