import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apislice = createSlice({
  name: "api",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

export const fetchData = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(addData(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const { addData } = apislice.actions;
export default apislice.reducer;
