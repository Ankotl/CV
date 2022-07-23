import React, { useContext } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

import { UserContext } from "../context/userContext";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const Profile = () => {
  const user = useContext(UserContext);
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      sx={{ pb: { xs: "28px", md: "32px" }, position: "relative" }}
      spacing={{ xs: "2", md: "3" }}
    >
      <Grid
        item
        component="img"
        sx={{
          height: { xl: 280, md: 295, xs: 60 },
          width: { xl: 230, md: 194, xs: 60 },
          borderRadius: "20px",
          mr: { md: "26px", xs: "10px" },
        }}
        alt="Avatar"
        src={user.avatar}
      />
      <Grid item xs>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 400,
              mb: "4px",
            }}
          >
            {`${user.name} ${user.surname}`}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
            }}
          >
            Frontend Developer
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          rowSpacing={"10px"}
          sx={{
            mt: { md: "13px", xs: "18px" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          <Grid item>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              <WorkOutlineIcon
                sx={{
                  mr: "10px",
                  fontSize: { xs: "20px", md: "22px" },
                }}
              />
              {user.experience} years - total work experience
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              <AccessTimeIcon
                sx={{
                  mr: "10px",
                  fontSize: { xs: "20px", md: "22px" },
                }}
              />
              Overlap with your time zone: XX am - XX pm
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              <TaskAltOutlinedIcon
                sx={{
                  mr: "10px",
                  fontSize: { xs: "20px", md: "22px" },
                }}
              />
              Availability:{" "}
              {user.availability
                ? "Ready to start now"
                : "Not ready to start right now"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ fontSize: "16px" }}>
              <FeedOutlinedIcon
                sx={{
                  mr: "10px",
                  fontSize: { xs: "20px", md: "22px" },
                }}
              />
              Full time - {user.timeWork} hours per week
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ pt: "20px" }}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            Я начинающий Фронтенд разработчик. Фронтенд разработку выбрал,
            потому что люблю удобные интерфейсы и хочу сам разрабатывать
            функционал, который будет удобен.
          </Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          top: 0,
          right: 0,
          mt: { xs: "28px", md: 0 },
        }}
      >
        <Button
          sx={{
            mr: { xs: "18px", md: "20px" },
            p: "8px 32px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          variant="outlined"
        >
          <FileUploadOutlinedIcon sx={{ fill: "#1976d2" }} /> Share
        </Button>

        <Button
          sx={{
            p: "8px 32px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          variant="contained"
        >
          Book a call
        </Button>
      </Box>
    </Grid>
  );
};

export default Profile;
