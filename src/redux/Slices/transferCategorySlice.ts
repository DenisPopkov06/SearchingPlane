import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransferState {
  transferCategory: number[]
}

const initialState: TransferState = {
  transferCategory: [0],
};

export const transferCategorySlice = createSlice({
  name: "transferCategory",
  initialState,
  reducers: {
    setTransferCategory(state, action: PayloadAction<number>) {
      if(state.transferCategory.includes(action.payload)){
        state.transferCategory = state.transferCategory.filter(i => i !== action.payload)
      } else{
        state.transferCategory = [...state.transferCategory, action.payload]
      }
    },
  },
});

export const { setTransferCategory } = transferCategorySlice.actions
export default transferCategorySlice.reducer
