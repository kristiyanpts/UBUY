import { API_BASEURL } from "../constants/api.constants";
import * as request from "../lib/request";

export const login = async (email, password) => {
  const result = await request.post(`${API_BASEURL}/login`, {
    email,
    password,
  });

  return result;
};

export const register = (
  firstName,
  lastName,
  email,
  username,
  password,
  repeatPassword,
  pfpUrl,
  role
) =>
  request.post(`${API_BASEURL}/register`, {
    firstName,
    lastName,
    email,
    username,
    password,
    repeatPassword,
    pfpUrl,
    role,
  });

export const logout = () => request.post(`${API_BASEURL}/logout`);

export const loadBackend = () => request.get(`${API_BASEURL}/info`);
