import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICurrency } from "../../types/clientTypes";

interface State {
  currency: ICurrency;
  category: string;
}

const initialState: State = {
  currency: { label: "Грн", value: "uah" },
  category: "",
};

const flowersSlice = createSlice({
  name: "flowersSlice",
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<ICurrency>) {
      state.currency = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
  },
});

export default flowersSlice.reducer;
export const { setCurrency, setCategory } = flowersSlice.actions;
