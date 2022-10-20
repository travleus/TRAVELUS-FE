import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Region } from '@apis/region';
import { Place } from '@utils/types';

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
  },
});

export default planSlice.reducer;
export const { nextStep } = planSlice.actions;
