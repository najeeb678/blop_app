import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";

import GlobalButton from "../components/UI/GlobalButton";
import { signupSchema } from "../schemas/signUpSchema";
import image from "../assets/image.jpg";
import GlobalInput from "../components/UI/GlobalInput";
// import { postUserData } from "../Redux/Slices/blogSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.userDetails.signupError);
  let signupError = null;
  let error = null;
  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: { name: "", email: "", phone: "", password: "" },
      validationSchema: signupSchema,
      // onSubmit: async (values, action) => {
      //   try {
      //     await dispatch(postUserData(values));
      //     if (!error) {
      //       setTimeout(() => {
      //         navigate("/");
      //       }, 2000);
      //     }
      //   } catch (err) {
      //     console.error("Error signing up:", err);
      //   }
      // },
    });

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{ maxWidth: "80%", maxHeight: "100%", borderRadius: 3, padding: 0 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={{ padding: 4 }}>
              {error && (
                <Typography variant="body1" sx={{ color: "error.main" }}>
                  {error}
                </Typography>
              )}
              {/* {error && console.log("Error:", error)} */}
              <Box sx={{ marginBottom: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                  Welcome!
                </Typography>
                <Typography variant="h6">To the User Web APP</Typography>
              </Box>

              <form>
                <GlobalInput
                  name="name"
                  label="Name"
                  value={values.name}
                  onChangehandler={handleChange}
                  onBlurHandler={handleBlur}
                  values={values}
                  helperText={touched.name && errors.name ? errors.name : null}
                  autoComplete="name"
                />
                <GlobalInput
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChangehandler={handleChange}
                  onBlurHandler={handleBlur}
                  values={values}
                  helperText={
                    touched.email && errors.email ? errors.email : null
                  }
                  autoComplete="email"
                />
                <GlobalInput
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChangehandler={handleChange}
                  onBlurHandler={handleBlur}
                  values={values}
                  helperText={
                    touched.password && errors.password ? errors.password : null
                  }
                  autoComplete="current-password"
                />
                <GlobalInput
                  name="phone"
                  label="Phone Number"
                  value={values.phone}
                  onChangehandler={handleChange}
                  onBlurHandler={handleBlur}
                  values={values}
                  helperText={
                    touched.phone && errors.phone ? errors.phone : null
                  }
                  autoComplete="phone"
                />
                <GlobalButton
                  variant="contained"
                  color="success"
                  title="Sign Up"
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </form>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  padding: 0,
                }}
              >
                <Typography style={{ fontSize: "15px" }}>
                  Already Have An Account?
                </Typography>
                <a
                  href="/"
                  sx={{
                    fontSize: "15px",
                    ml: 1,
                    cursor: "pointer",
                  }}
                >
                  Login Now
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: "10px", // Adjust the value as needed
                borderBottomRightRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignUp;
