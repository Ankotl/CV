import { useState } from "react";
import { Box, Divider } from "@mui/material";

import { UserContext } from "../context/userContext";
import Profile from "./Profile";
import Technologies from "./Technologies";
import VettedSkills from "./VettedSkills";
import Experience from "./Experionce";
import Footer from "./Footer";
import Education from "./Education";

export default function App() {
  const [user] = useState({
    name: "Антон",
    surname: "Котляков",
    avatar:
      "https://images.unsplash.com/photo-1658280966901-2340a5bc854d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    experience: 1,
    availability: true,
    timeWork: 40,
    languages: ["Javascript", "HTML", "CSS", "Python"],
    technologies: ["React", "Redux", "Material Ui"],
  });

  return (
    <UserContext.Provider value={user}>
      <Box className="app">
        <Box
          sx={{
            p: { xl: "44px 32px", md: "28px 25px", xs: "20px 14px" },
            maxWidth: "1180px",
            m: "auto",
            backgroundColor: "#FFF",
          }}
        >
          <Profile />
          <Divider />
          <Technologies />
          <VettedSkills />
          <Experience />
          <Education />
          <Footer />
        </Box>
      </Box>
    </UserContext.Provider>
  );
}
