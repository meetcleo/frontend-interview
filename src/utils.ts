import axios from "axios";
import { CurrencyCode } from "./types";

export const convert = async (
  fromCurrency: keyof CurrencyCode,
  toCurrency: keyof CurrencyCode,
  amount: number
) => {
  const { data } = await axios.get<Record<keyof CurrencyCode, number>>(
    "http://localhost:3002/rates"
  );

  const toRate = data[toCurrency];
  const fromRate = data[fromCurrency];

  return (toRate / fromRate) * amount;
};
