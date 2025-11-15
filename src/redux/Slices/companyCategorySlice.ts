import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Company = {
  name: string;
  id: number;
}

interface CompanyState {
  companies: Company[]
}

const initialState: CompanyState = {
  companies: [{ name: "Победа", id: 0 }],
};

export const companyCategorySlice = createSlice({
  name: "companyCategory",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company>) => {
      if (state.companies.some((company) => company.id === action.payload.id)) {
        state.companies = state.companies.filter((o) => action.payload.id !== o.id);
      } else {
        state.companies = [...state.companies, { name: action.payload.name, id: action.payload.id }];
      }
    },
  },
});

export const { setCompanies } = companyCategorySlice.actions;

export default companyCategorySlice.reducer;
