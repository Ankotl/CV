import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#F7F7FA",
        p: { md: "26px 32px", xs: "20px 16px" },
        borderRadius: "20px",
        position: "relative",
        fontFamily: "Cabin",
        fontSize: { xs: "18px", md: "20px" },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "center" },
        mt: { xs: "44px", md: "12px" },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          mb: { xs: "26px", md: "0" },
        }}
      >
        Would you like to schedule an interview with Anton Kotlyakov?
      </Typography>

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
  );
};

export default Footer;
