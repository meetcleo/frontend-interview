export enum Currencies {
  AUD = 'Australian Dollar',
  CAD = 'Canadian Dollar',
  CHF = 'Swiss Franc',
  CNY = 'Chinese Yuan',
  EUR = 'Euro',
  GBP = 'British Pound Sterling',
  RUB = 'Russian Ruble',
  THB = 'Thai Baht',
  USD = 'United States Dollar',
}

export type CurrencyCodes = keyof typeof Currencies;

export type RatesForCurrency = {
  [key in CurrencyCodes]: number;
};

export type Rate = {
  base: keyof typeof Currencies;
  rates: RatesForCurrency;
};

export type Rates = Rate[];

export type ConvertResponse = {
  from: keyof typeof Currencies;
  to: keyof typeof Currencies;
  amount: number;
  convertedAmount: number;
};
