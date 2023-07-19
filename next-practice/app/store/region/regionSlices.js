import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import regionApi from "@/app/api/regionApi";

const initialState = {
  regions: [],
  status: "idle",
  error: null,
};

export const fetchRegions = createAsyncThunk("regions/fetchRegions", regionApi.getAll);
export const getOneRegion = createAsyncThunk("regions/getOneRegion", regionApi.getById);
export const addNewRegion = createAsyncThunk("regions/addNewRegion", regionApi.create);
export const updateRegion = createAsyncThunk("regions/updateRegion", regionApi.edit);
export const deleteRegion = createAsyncThunk("regions/deleteRegion", regionApi.destroy);

const regionSlices = createSlice({
  name: "region",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.regions = [...action.payload];
      })
      .addCase(fetchRegions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewRegion.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(updateRegion.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(deleteRegion.fulfilled, (state) => {
        state.status = "idle";
      });
  },
});

export default regionSlices.reducer;
