import { createSlice } from "@reduxjs/toolkit";

interface DownloadingState {
  downloadTickets: number
}

const initialState: DownloadingState = {
  downloadTickets: 2,
};

export const downloadingSlice = createSlice({
  name: "downloading",
  initialState,
  reducers: {
    downloadingTickets: (state) =>{
        state.downloadTickets += 3
    }
  }
});

export const { downloadingTickets } = downloadingSlice.actions

export default downloadingSlice.reducer