import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/region`;

export interface Region {
  id: number;
  pictureUrl: string;
  useCount: number;
  region: string;
}

/**
 * 지역을 Id로 조회
 * @param id
 */
export const getRegionById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

/**
 * 지역을 UseCount 내림차순 조회
 * @param size
 * @param page
 */
export const getRegionOrderByUseCount = async (size: number, page: number) => {
  const response = await axios.get(`${API_URL}/ordered?size=${size}&page=${page}`);
  return response.data;
};

/**
 * 모든 Region 조회
 */
export const getAllRegion = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};
