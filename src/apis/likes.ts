import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/likes`;

export interface Likes {
  id: number;
  memberId: number;
  targetType: string;
  refId: number;
  isActivate: boolean;
}

export type RegisterLikes = Omit<Likes, 'id' | 'isActivate'>;

export type DeleteLikes = Omit<Likes, 'targetType' | 'isActivate'>;

export const setLikes = async (likes: DeleteLikes | RegisterLikes) => {
  const response = await axios.post(API_URL, likes);
  return response.data;
};

export const getLikesPlace = async (place: string, memberId: number) => {
  const response = await axios.get(`${API_URL}/${place}?memberId=${memberId}`);
  return response.data;
};
