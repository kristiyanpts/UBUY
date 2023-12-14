import { API_BASEURL } from "../constants/api.constants";
import * as request from "../lib/request";

export const createPaymentIntent = async (items) => {
  const response = await request.post(
    `${API_BASEURL}/stripe/create-payment-intent`,
    { items: items }
  );

  return response;
};
