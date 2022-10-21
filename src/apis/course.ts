import axios from 'axios';
import { Place } from '@apis/place';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/course`;

export interface Course {
  id: number;
  memberId: number;
  regionId: number;
  hotelIds: string;
  placeIds: string;
  restaurantIds: string;
  cafeIds: string;
}

export type RegisterCourse = Omit<Course, 'id'>;

export interface CourseDTO extends Course {
  hotelList: Array<Place>;
  hotPlaceList: Array<Place>;
  restaurantList: Array<Place>;
  cafeList: Array<Place>;
}

export const registerCourse = async (course: RegisterCourse) => {
  const response = await axios.post(API_URL, course);
  return response.data;
};

export const getCourseById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getAllCourseByMemberId = async (memberId: number, size: number, page: number) => {
  const response = await axios.get(`${API_URL}/member?memberId=${memberId}&size=${size}&page=${page}`);
  return response.data;
};

export const deleteCourse = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
