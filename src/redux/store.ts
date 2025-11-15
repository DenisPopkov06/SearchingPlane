import { configureStore } from "@reduxjs/toolkit";

import downloadingSliceReducer from "./Slices/downloadingSlice";
import sortSliceReducer from "./Slices/sortSlice";
import transferCategorySliceReducer from "./Slices/transferCategorySlice";
import companyCategorySliceReducer from "./Slices/companyCategorySlice";
import ticketSliceReducer from "./Slices/ticketSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    downloading: downloadingSliceReducer,
    sorting: sortSliceReducer,
    transferSorting: transferCategorySliceReducer,
    companySorting: companyCategorySliceReducer,
    ticketSort: ticketSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
