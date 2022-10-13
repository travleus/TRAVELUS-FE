import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/member`;

export interface Member {
  id: number;
  kakao: string;
}

export type RegisterMember = Omit<Member, 'id'>;

/**
 * Memeber 조회 API
 * @param id
 */
export const getMember = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

/**
 * MEMBER가 Travelus 회원인지 확인하는 API
 * 회원이면 회원ID 반환
 * 아니면 404반환
 */
export const checkMember = async (kakao: string) => {
  const response = await axios.get(`${API_URL}/check?kakao=${kakao}`);
  return response.data;
};

/**
 * Member 등록 API
 * @param member
 */
export const registerMember = async (member: RegisterMember) => {
  const response = await axios.post(API_URL, member);
  return response.data;
};

/**
 * 회원 탈퇴 요청 API
 * @param id
 */
export const deleteMember = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
