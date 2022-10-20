import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export interface Place {
  id: number;
  name: string;
  tag: string;
  region: string;
  pictureUrl: string;
  useCount: number;
  description: string;
  url: string;
  address: string;
  targetType: string;
}

export const getPlaceById = async (place: string, id: number) => {
  const response = await axios.get(`${API_URL}/${place}/${id}`);
  return response.data;
};

export const getPlaceByRegionWithTag = async (place: string, regionId: number, tag: string) => {
  const response = await axios.get(`${API_URL}/${place}/list?regionId=${regionId}&tag=${tag}`);
  return response.data;
};

export const getAllPlaceOrderByUseCount = async (place: string, size: number, page: number) => {
  const response = await axios.get(`${API_URL}/${place}/all?size=${size}&page=${page}`);
  return response.data;
};

export const getPlaceByRegionOrderByUseCount = async (place: string, regionId: number, size: number, page: number) => {
  const response = await axios.get(`${API_URL}/${place}/ordered?regionId=${regionId}&size=${size}&page=${page}`);
  return response.data;
};
