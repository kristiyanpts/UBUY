import { API_BASEURL } from "../constants/api.constants";
import * as request from "../lib/request";

export const getProducts = async () => {
  const response = await request.get(`${API_BASEURL}/products`);

  return response;
};

export const getProductsByLimit = async (limit) => {
  const response = await request.get(`${API_BASEURL}/products?limit=${limit}`);

  return response;
};

export const getProductById = async (productId) => {
  const response = await request.get(`${API_BASEURL}/products/${productId}`);

  return response;
};

export const createProduct = async (productData) => {
  const response = await request.post(`${API_BASEURL}/products`, productData);

  return response;
};

export const editProduct = async (productId, productData) => {
  const response = await request.put(
    `${API_BASEURL}/products/${productId}`,
    productData
  );

  return response;
};

export const buyProduct = async (productId, productData) => {
  const response = await request.put(
    `${API_BASEURL}/products/${productId}/buy`,
    productData
  );

  return response;
};

export const deleteProduct = async (productId) => {
  const response = await request.remove(`${API_BASEURL}/products/${productId}`);

  return response;
};

// Product Reviews
export const addProductReview = async (productId, reviewData) => {
  const response = await request.put(
    `${API_BASEURL}/products/${productId}/reviews`,
    reviewData
  );

  return response;
};

export const deleteProductReview = async (productId, reviewId) => {
  const response = await request.remove(
    `${API_BASEURL}/products/${productId}/reviews/${reviewId}`
  );

  return response;
};
