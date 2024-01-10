import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import router from "next/router";

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface User {
  id: string;
  fullName: string;
  phoneNumber: number;
  email: string;
  password: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const Login = createAsyncThunk(
  "Login",
  async (data: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const authInfo = await res.json();
      if (res.status === 200) {
        dispatch(setToken(authInfo.token));
        dispatch(setUser(authInfo.user));

        localStorage.setItem("token", authInfo.token);

        router.push("/");
      }
      return authInfo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(Login.fulfilled, (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.error = null;
    })
    .addCase(Login.rejected, (state, action)=>{
        state.loading = false;
        state.error= action.error.message || 'Login Failed';
    })
  },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
