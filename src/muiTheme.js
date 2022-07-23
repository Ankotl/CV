import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 900,
      xl: 1180,
    },
  },
});

export default muiTheme;
