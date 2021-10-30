import api from '../api';
import { GetCurrencyQuoteResponse } from './interfaces';

export const getCurrencyQuote = async (
  currency: string
): Promise<GetCurrencyQuoteResponse> => {
  const response = await api.get(`/${currency}/ticker`);

  return response.data;
};
