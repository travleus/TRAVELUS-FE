import { initStep, nextStep, Plan } from '@stores/plan/plan';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import { Region } from '@apis/region';
import { Place } from '@apis/place';

const usePlan = () => {
  const plan: Plan = useSelector((state: RootState) => state.plan);

  const dispatch = useDispatch();

  const onNextStep = async (payload: Region | Place) => {
    dispatch(nextStep(payload));
  };

  const onInitStep = (payLoad: string) => {
    dispatch(initStep(payLoad));
  };

  return { plan, onNextStep, onInitStep };
};

export default usePlan;
