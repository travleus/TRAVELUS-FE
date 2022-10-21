import { Dot, FlexRowCenterContainer } from '@components/Container';
import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import useResize from '@hooks/useResize';
import usePlan from '@stores/plan/planHook';
import { PlaceHash } from '@utils/types';

function PlanProgress() {
  const { plan } = usePlan();

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      `}>
      <FlexRowCenterContainer>
        {plan.region && <PlaceHolder placeType={'region'} name={plan.region.region} />}
        <ProgressDot />
        {plan.hotel ? <PlaceHolder placeType={'hotel'} name={plan.hotel.name} /> : <PassengerImage />}
        <ProgressDot />
        {plan.sights ? <PlaceHolder placeType={'hotplace'} name={plan.sights.name} /> : <PassengerImage />}
        <ProgressDot />
        {plan.restaurant ? <PlaceHolder placeType={'restaurant'} name={plan.restaurant.name} /> : <PassengerImage />}
        <ProgressDot />
        {plan.cafe ? <PlaceHolder placeType={'cafe'} name={plan.cafe.name} /> : <PassengerImage />}
      </FlexRowCenterContainer>
    </div>
  );
}

function PassengerImage() {
  return (
    <img
      css={css`
        margin: 0 5px;
        width: 25px;
        height: 25px;
      `}
      src={'/icons/passenger.png'}
      alt={'passenger'}
    />
  );
}

interface Props {
  name: string;
  placeType: string;
}

function PlaceHolder({ name, placeType }: Props) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5px;
        height: 60px;
      `}>
      <Text typographyType={'t8'}>{PlaceHash[placeType]}</Text>
      <img
        css={css`
          margin-top: 4px;
          margin-bottom: 6px;
        `}
        width={25}
        height={25}
        src={'/icons/placeholder.png'}
        alt={'placeholder'}
      />
      <Text
        css={css`
          @media screen and (max-width: 768px) {
            max-width: 36px;
          }
        `}
        typographyType={'t7'}
        fontWeight={500}>
        {name}
      </Text>
    </div>
  );
}

function ProgressDot() {
  const fullSize = useResize();
  const renderArrayForMobile = new Array(3).fill(0);
  const renderArrayForDesktop = new Array(5).fill(0);

  return (
    <>
      {fullSize
        ? renderArrayForDesktop.map((value, index) => (
            <Dot
              key={index}
              css={css`
                margin-right: 3px;
              `}
              color={colors.red}
            />
          ))
        : renderArrayForMobile.map((value, index) => (
            <Dot
              key={index}
              css={css`
                margin-right: 3px;
              `}
              color={colors.red}
            />
          ))}
    </>
  );
}

export default PlanProgress;
