import { API_BASEURL } from "../constants/api.constants";
import * as request from "../lib/request";

export const getProfileInfo = async (userId) => {
  const result = await request.get(`${API_BASEURL}/users/${userId}`);

  return result;
};

export const editProfileInfo = async (userId, userData) => {
  const result = await request.put(`${API_BASEURL}/users/${userId}`, userData);

  return result;
};

export const deleteProfile = async (userId) => {
  const result = await request.remove(`${API_BASEURL}/users/${userId}`);

  return result;
};
