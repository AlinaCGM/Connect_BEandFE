import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

// const theme = createTheme();

function LoginForm() {
  type InitialValues = {
    email: string;
    password: string;
  };
  const initialValues: InitialValues = {
    email: "",
    password: "",
  };
  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please provide a valid email address"),
    password: Yup.string().required("Please Enter your password"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
    //   "Must Contain 6 Characters, One Uppercase, One Lowercase and One Number"
    // ),
  });

  const navigate = useNavigate();
  return (
    // <ThemeProvider theme={theme}>
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        axios.post("http://localhost:8001/users/login", values).then(() => {
          navigate("/user");
        });
      }}
    >
      {({ errors, touched, handleChange }) => {
        return (
          <Form style={{ marginTop: "5rem", marginLeft: "50%" }}>
            <Box>
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                name="email"
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <Typography className="error-message">
                  {errors.email}
                </Typography>
              ) : null}
            </Box>
            <Box>
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                name="password"
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <Typography className="error-message">
                  {errors.password}
                </Typography>
              ) : null}
            </Box>
            <Button type="submit" color="primary" className="button">
              Log in
            </Button>
          </Form>
        );
      }}
    </Formik>
    // </ThemeProvider>
  );
}

export default LoginForm;
