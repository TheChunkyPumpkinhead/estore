import { createSlice } from "@reduxjs/toolkit";

const initalState = ["Men", "Women", "Kids", "Best Offfers", "All"];

const categorySlice = createSlice({
  name: "Category",
  initalState,
});
export default categorySlice;
