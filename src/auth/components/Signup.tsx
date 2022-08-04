import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useRef } from "react";

const Signup: React.FC = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current!.value;

    const user = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      passwordConfirm: enteredConfirmPassword,
    };
    console.log(user);

    const response = await fetch(
      "http://157.175.44.133:8000/api/v1/users/signup",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#00bf94" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="fullName"
            label="Full Name"
            type="name"
            id="name"
            autoComplete="current-password"
            inputRef={nameInputRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailInputRef}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordInputRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            inputRef={confirmPasswordInputRef}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#00bf94" }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/auth/login">Already have an account? Log In</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Signup;
