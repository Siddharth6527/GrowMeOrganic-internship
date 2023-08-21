import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Siddharth6527">
        Siddharth Verma
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState<{
    status: string;
    message: string;
  }>({
    status: "",
    message: "",
  });

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [enteredName, setEnteredName] = useState<HTMLInputElement | string>();
  const [enteredNumber, setEnteredNumber] = useState<
    HTMLInputElement | string
  >();
  const [enteredEmail, setEnteredEmail] = useState<HTMLInputElement | string>();

  const NameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredName(event.target.value);
  };
  const numberHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredNumber(event.target.value);
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredEmail && enteredName && enteredNumber) {
      setAlertMessage({
        status: "success",
        message: "Login Successfull",
      });
      setOpen(true);
      const data = {
        name: enteredName,
        number: enteredNumber,
        email: enteredEmail,
      };
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      setAlertMessage({
        status: "error",
        message: "Try Again! Some went wrong",
      });
      setOpen(true);
      console.log("Try Again!");
    }
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        // anchorOrigin={{ "top", "right" }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          // severity={"Success"}
          severity={alertMessage.status === "success" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {alertMessage.message}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={enteredName || []}
                onChange={NameHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="number"
                label="Phone Number"
                type="number"
                id="number"
                autoComplete="number"
                value={enteredNumber || []}
                onChange={numberHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={enteredEmail || []}
                onChange={emailHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
