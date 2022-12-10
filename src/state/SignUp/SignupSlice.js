import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

export const createSignUp = createAsyncThunk(
  "/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/register",data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userSignup = action.payload.userId;
      state.success = true;
    });
    builder.addCase(createSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export default signUpSlice.reducer;