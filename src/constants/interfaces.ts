export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  currency: string;
  quote_value: number;
  transaction_currency: string;
  transaction_value: number;
}
