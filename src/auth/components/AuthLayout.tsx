import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fityouLogo from "../../assets/fityouLogo.svg";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const Copyright = (props: any) => {
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
};

type Children = { children?: any };
const theme = createTheme();

const AuthLayout: React.FC<Children> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
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
            backgroundSize: "85%",
            backgroundPosition: "center",
          }}
        />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Routes>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
};

export default AuthLayout;
