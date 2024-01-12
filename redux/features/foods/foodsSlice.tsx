import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  categories: [],
  servicesForCategories: [],
  sliderImages: [],
};

export const getFoods = createAsyncThunk(
  "getfoods",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://127.0.0.1:8080/shop");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoods.fulfilled, (state, action)=>{
      return { ...state, ...action.payload };

    }).addCase(getFoods.rejected, (state, action)=>{})
  },
});

export default foodsSlice.reducer;
