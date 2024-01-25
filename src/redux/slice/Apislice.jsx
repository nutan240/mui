
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 export const fetchapi = createAsyncThunk("fetchapi", async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  return response.data;
});
const apislice = createSlice({
  name: "api",
  initialState: {
    isLoading:false,
    data:[],
    isError:false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchapi.pending, (state, action) => {
      state.isLoading = true;
      console.log("pending" );
    });

    builder.addCase(fetchapi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("fulfilled" ,action.payload)
    });
    builder.addCase(fetchapi.rejected, (state, action) => {
        console.log("error" ,action.payload);
        state.isError=true;
      });
  },
});

export default apislice.reducer;
