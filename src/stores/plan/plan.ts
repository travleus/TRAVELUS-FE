import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Region } from '@apis/region';
import { Place } from '@apis/place';

export interface Plan {
  step: number;
  region: Region | null;
  hotel: Place | null;
  sights: Place | null;
  restaurant: Place | null;
  cafe: Place | null;
}

const initialState: Plan = {
  step: 1,
  region: null,
  hotel: null,
  sights: null,
  restaurant: null,
  cafe: null,
};

export const planSlice = createSlice({
  name: 'plan',
  initialState: initialState,
  reducers: {
    nextStep(state: Plan, action: PayloadAction<Region | Place>) {
      switch (state.step) {
        case 1:
          state.region = action.payload as Region;
          state.step++;
          break;
        case 2:
          state.hotel = action.payload as Place;
          state.step++;
          break;
        case 3:
          state.sights = action.payload as Place;
          state.step++;
          break;
        case 4:
          state.restaurant = action.payload as Place;
          state.step++;
          break;
        case 5:
          state.cafe = action.payload as Place;
          state.step++;
          break;
      }
    },
    initStep(state: Plan, action: PayloadAction<string>) {
      switch (action.payload) {
        case 'region':
          state.step = 1;
          state.region = null;
          state.hotel = null;
          state.sights = null;
          state.restaurant = null;
          state.cafe = null;
          break;
        case 'hotel':
          state.step = 2;
          state.hotel = null;
          state.sights = null;
          state.restaurant = null;
          state.cafe = null;
          break;
        case 'hotplace':
          state.step = 3;
          state.sights = null;
          state.restaurant = null;
          state.cafe = null;
          break;
        case 'restaurant':
          state.step = 4;
          state.restaurant = null;
          state.cafe = null;
          break;
        case 'cafe':
          state.step = 5;
          state.cafe = null;
          break;
      }
    },
  },
});

export default planSlice.reducer;
export const { nextStep, initStep } = planSlice.actions;
