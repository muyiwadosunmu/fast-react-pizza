// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { loginUserAPI, signupUserAPI, logoutUserAPI } from "../../services/authAPI";
// // Import your authentication service methods

// // Async thunk to handle user login
// export const loginUser = createAsyncThunk("user/loginUser", async (credentials) => {
//   try {
//     const user = await loginUserAPI(credentials);
//     return user;
//   } catch (error) {
//     throw error;
//   }
// });

// // Async thunk to handle user signup
// export const signupUser = createAsyncThunk("user/signupUser", async (userData) => {
//   try {
//     const user = await signupUserAPI(userData);
//     return user;
//   } catch (error) {
//     throw error;
//   }
// });

// // Async thunk to handle user logout
// export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
//   try {
//     await logoutUserAPI();
//   } catch (error) {
//     throw error;
//   }
// });

// const initialState = {
//   username: "",
//   isAuthenticated: false,
//   status: "idle",
//   position: {},
//   address: "",
//   error: "",
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {
//     updateName(state, action) {
//       state.username = action.payload;
//     },
//     clearUserState(state) {
//       state.username = "";
//       state.isAuthenticated = false;
//       state.position = {};
//       state.address = "";
//       state.error = "";
//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       // ... other extraReducers for fetchAddress
//       .addCase(loginUser.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.username = action.payload.username;
//         state.status = "idle";
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = "error";
//         state.error = action.error.message;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.isAuthenticated = false;
//         state.username = "";
//         state.position = {};
//         state.address = "";
//         state.error = "";
//       }),
// });

// export const { updateName, clearUserState } = userSlice.actions;
// export default userSlice.reducer;
