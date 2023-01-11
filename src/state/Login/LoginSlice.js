import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

export const createLogin = createAsyncThunk(
  "login/authenticate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/login", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    success: false,
    error: false,
    errorMessage: "",
    user: {},
    token: null
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isLoading = false;
      state.success = false;
      state.error = false;
      state.user = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      state.errorMessage = "";
      state.success = true;
    });
    builder.addCase(createLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export const { logout } = loginSlice.actions
export default loginSlice.reducer;
