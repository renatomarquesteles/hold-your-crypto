export interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  quote_value: number;
  transaction_currency: string;
  transaction_value: number;
}
