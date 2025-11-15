import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState{
  sort: number
}

const initialState: SortState = {
  sort: 0,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<number>) {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions
export default sortSlice.reducer
