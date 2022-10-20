import { nextStep, Plan } from '@stores/plan/plan';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import { Region } from '@apis/region';
import { Place } from '@apis/place';

const usePlan = () => {
  const plan: Plan = useSelector((state: RootState) => state.plan);

  const dispatch = useDispatch();

  const onNextStep = (payload: Region | Place) => {
    dispatch(nextStep(payload));
  };

  return { plan, onNextStep };
};

export default usePlan;
