import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";

import { useRef } from "react";

const ResetPassword: React.FC = (props) => {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current!.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current!.value;

    const user = {
      password: enteredPassword,
      passwordConfirm: enteredConfirmPassword,
    };

    const response = await fetch(
      "http://157.175.44.133:8000/api/v1/users/users/resetPassword/",
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
          Change your password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New password"
            name="password"
            autoComplete="password"
            autoFocus
            inputRef={passwordInputRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm password"
            label="Confirm password"
            type="password"
            id="confirmPassword"
            autoComplete="confirm-password"
            inputRef={confirmPasswordInputRef}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#00bf94" }}
          >
            Change
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ResetPassword;
