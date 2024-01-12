import { RootState } from "@/redux/store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const signUp = createAsyncThunk(
  "signUp",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resInfo = await res.json();

      localStorage.setItem("user", JSON.stringify(resInfo.user));
      router.push("/login");

      return resInfo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (data: any, { rejectWithValue}) => {
    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const authInfo = await res.json();
      if (res.status === 200) {

        localStorage.setItem("token", JSON.stringify(authInfo.token));

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
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "sign up Failed";
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login Failed";
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
