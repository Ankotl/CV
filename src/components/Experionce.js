import { Box, Typography, Divider } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import SkillList from "./SkillList";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Experience = () => {
  const { languages, technologies } = useContext(UserContext);
  return (
    <Box
      sx={{
        display: { md: "flex", xs: "block" },
        gap: { xs: "26px", xl: "60px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "20px",
          mb: { xs: "14px", md: 0 },
          transform: "translate(0,-9px)",
        }}
      >
        <WorkOutlineOutlinedIcon
          sx={{
            mr: "8px",
            flex: 1,
            transform: "translate(0,4px)",
          }}
        />
        Work Experience
      </Typography>

      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            pl: { md: "34px", xs: "15px" },
            borderLeft: "1px solid",
            ml: "7px",
            color: "#EBEBEB",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "14px",
              height: "14px",
              background: "#373AF5",
              position: "absolute",
              borderRadius: "50%",
              left: "-7px",
              top: "5px",
              zIndex: "2",
            }}
          />

          <Box
            sx={{
              width: "20px",
              height: "23px",
              background: "white",
              position: "absolute",
              borderRadius: "50%",
              left: "-10px",
              top: 0,
              zIndex: "0",
            }}
          />

          <Box
            sx={{
              width: "20px",
              height: "30px",
              background: "white",
              position: "absolute",
              borderRadius: "50%",
              left: "-10px",
              bottom: 0,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            Frontend Developer
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#6B6B6B",
              mb: { xs: "6px", md: "14px" },
              mt: "2px",
            }}
          >
            Ya.Practikum
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { md: "10px", xs: "4px" },
            }}
          >
            <AccessTimeIcon
              sx={{
                fontSize: { xs: "20px", md: "22px" },
              }}
            />
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              8 month
            </Typography>

            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              |
            </Typography>

            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              Noveber 2021 - October 2022
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              mt: { xs: "10px", md: "14px" },
              mb: "16px",
            }}
          >
            Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus
            egestas mauris fringilla iaculis feugiat tincidunt auctor tellus.
            Faucibus enim condimentum est adipiscing varius id fermentum
            tincidunt nisl. Aliquam. Tempus egestas mauris fringilla iaculis
            feugiat tincidunt auctor tellus. Faucibus enim condimentum est
            adipiscing varius id fermentum tincidunt nisl. Aliquam.
          </Typography>

          <SkillList array={languages} title="Languages" />

          <SkillList array={technologies} title="Technologies" />

          <Divider sx={{ m: { xs: "22px 0", md: "28px 0" } }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
