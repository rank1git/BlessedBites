import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('api/fetchData', async (endpoint) => {
    try {
      const res = await fetch(`https://dummyjson.com/${endpoint}`);
      return res.json();
    } catch (err) {
			console.error('Error fetching data: ', err);
		}
  }
);

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    data: {},
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recipeSlice.reducer;