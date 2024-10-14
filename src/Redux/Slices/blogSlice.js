import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const postSignUpData = createAsyncThunk(
//   "userDetail/postUserData",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://7d4e-116-58-9-130.ngrok-free.app/auth/signup",
//         userData
//       );

//       return response.data;
//     } catch (error) {
//       if (error.response.data.message && error.response.status === 400) {
//         throw rejectWithValue("User Already Exist : please login");
//       }
//       throw error;
//     }
//   }
// );

// export const postLoginData = createAsyncThunk(
//   "userDetails/postLoginData",
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://7d4e-116-58-9-130.ngrok-free.app/auth/signin",
//         loginData
//       );
//       localStorage.setItem("token", response.data.token);

//       return response;
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         // Unauthorized - password doesn't match
//         return rejectWithValue("Password doesn't match");
//       }
//       throw error;
//     }
//   }
// );

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
isAdmin:false,
  },
  reducers: {},

  extraReducers: (builder) => {
  //   builder
  //     .addCase(postUserData.pending, (state) => {
  //       state.signupError = null;
  //       state.loading = true;
  //     })
  //     .addCase(postUserData.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.signupError = null;
  //       state.users.push(action.payload);
  //     })
  //     .addCase(postUserData.rejected, (state, action) => {
  //       state.signupError = true;
  //       state.loading = false;
  //       state.signupError = action.error.message;
  //       if (action.payload === "User Already Exist : please login") {
  //         state.signupError = "User Already Exist : please login";
  //       } else {
  //         state.signupError = action.error.message;
  //       }
  //     })
  //     .addCase(postLoginData.pending, (state) => {
  //       state.loginError = null;
  //       state.loading = true;
  //     })
  //     .addCase(postLoginData.fulfilled, (state, action) => {
  //       state.loginError = null;
  //       state.loading = false;
  //     })
  //     .addCase(postLoginData.rejected, (state, action) => {
  //       state.loading = false;
  //       state.loginError = true;
  //       if (action.payload === "Password doesn't match") {
  //         state.loginError = "Password doesn't match";
  //       } else {
  //         state.loginError = action.error.message;
  //       }
  //     });
   },
});

export default blogSlice.reducer;
