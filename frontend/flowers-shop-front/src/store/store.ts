import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import flowersSlice from "./slices/flowersSlice";

export const store = configureStore({
  reducer: {
    flowers: flowersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
