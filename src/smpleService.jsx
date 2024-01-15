// const BASE_URL = "https://your-auth-api-base-url.com";

// // Function to handle user login
// export const loginUserAPI = async (credentials) => {
//   try {
//     const response = await fetch(`${BASE_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });

//     if (!response.ok) {
//       throw new Error("Login failed. Invalid credentials.");
//     }

//     const user = await response.json();
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Function to handle user signup
// export const signupUserAPI = async (userData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error("Signup failed. Please try again.");
//     }

//     const user = await response.json();
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Function to handle user logout
// export const logoutUserAPI = async () => {
//   try {
//     // Perform any necessary cleanup or server-side operations for logout
//     // For example, invalidate the user's session on the server

//     // Assuming the server does not return any data upon successful logout
//     // If your server sends data, you might want to handle it appropriately
//   } catch (error) {
//     throw error;
//   }
// };
