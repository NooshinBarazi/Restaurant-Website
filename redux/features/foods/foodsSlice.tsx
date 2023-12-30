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
      const res = await fetch("http://37.32.21.146:8080/shop");
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
