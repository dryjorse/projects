export type CurrencyTypes = "" | "uah" | "som" | "rub";

export interface ICurrency {
  label: string;
  value: CurrencyTypes;
}

export interface IOption {
  value: string;
  label: string;
}
