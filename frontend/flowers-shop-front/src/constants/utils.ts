import { CurrencyTypes } from "../types/clientTypes";

export const currencyConverter = (price: number, currency: CurrencyTypes) => {
  const difference = currency == "som" ? 2.25 : currency === "rub" ? 2.36 : 1;
  return (price * difference).toFixed(0);
};
