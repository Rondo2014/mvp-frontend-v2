import { deepPurple, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: deepPurple[500],
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
