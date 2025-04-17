import axiosInstance from './axiosInstance';

export const get = async (url: string, config = {}) => {
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const del = async (url: string, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
