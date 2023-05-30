import axios from "axios";
import { api } from "../configs";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Credentials" : true,
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  },
};

export const publicGet = async (endpoint) => {
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const publicPost = async (endpoint, body) => {
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privateGet = async (endpoint, token) => {
  config.headers.token = `${token}`;
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const privatePost = async (endpoint, token, body) => {
  config.headers.token = `${token}`;
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privatePut = async (endpoint, token, body) => {
  config.headers.token = `${token}`;
  const response = await axios.put(`${api}${endpoint}`, body, config);
  return response.data;
};

export const publicPatch = async (endpoint, body) => {
  const response = await axios.patch(`${api}${endpoint}`, body, config);
  return response.data;
};
