import Grid from "@mui/material/Grid";
import fityouLogo from "../assets/fityouLogo.svg";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Signin from "./Signin";
import Signup from "./Signup";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function FityouLogin() {
  const theme = createTheme();

  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://fit-you.net/">
          FitYou
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Grid container component="main" sx={{ height: "100vh" }}> */}
      <CssBaseline />
      <Signin />
      <Signup />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${fityouLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "90%",
          backgroundPosition: "center",
        }}
      />{" "}
      <Copyright sx={{ mt: 5 }} />
      <Grid />
    </ThemeProvider>
  );
}
