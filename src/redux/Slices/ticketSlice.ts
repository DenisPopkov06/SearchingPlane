import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataTickets } from "../../utils/mockApi";

type DataTicketType = {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: string;
  time: string;
  startTime: string;
  endTime: string;
  imgUrl: string;
  counterTransfer: number;
};

interface StateTicket {
  tickets: DataTicketType[]
}

const initialState: StateTicket = {
  tickets: dataTickets,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<DataTicketType[]>) {
      state.tickets = action.payload;
    },
  },
});

export const { setTickets } = ticketSlice.actions;
export default ticketSlice.reducer;
