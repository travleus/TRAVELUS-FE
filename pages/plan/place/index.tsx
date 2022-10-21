import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useFetchPlaceOrderedByRegion } from '@hooks/queries';
import { Container, FlexRowCenterContainer, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import Switch from '@components/Switch';
import Select from '@components/Select';
import Loading from '@components/Loading';
import { useRouter } from 'next/router';
import PlanProgress from '@components/PlanProgress';
import { Place } from '@apis/place';
import usePlan from '@stores/plan/planHook';
import PlaceItem from '@components/PlaceItem';
import { PlaceHash } from '@utils/types';
import EmptyContent from '@components/EmptyContent';

const PlacePage: NextPage = () => {
  const router = useRouter();
  const { target } = router.query;
  const { plan, onInitStep } = usePlan();
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState<Place | null>();
  const allPlace = useFetchPlaceOrderedByRegion(target as string, plan.region?.id as number, 100, 0);

  const onClickItem = (place: Place) => {
    setPlace(place);
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
    setPlace(null);
  }, [setOpen, setPlace, target]);

  useEffect(() => {
    if (target) {
      onInitStep(target as string);
      plan.region || router.push('/plan');
    }
  }, [target]);

  return (
    <>
      {allPlace.data ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              여행 루트 만들기
            </Text>
            <Text typographyType={'t3'} fontWeight={700}>
              {plan.step}단계
            </Text>
            <Text
              css={css`
                text-decoration: underline ${colors.primary2} 1.5px;
              `}
              typographyType={'t6'}
              fontWeight={700}>
              {PlaceHash[target as string]}
            </Text>
          </TopContainer>
          <MainContainer>
            <PlanProgress />
            <div
              css={css`
                display: flex;
                margin-bottom: 20px;
              `}>
              <Text
                css={css`
                  letter-spacing: -0.5px;
                  height: 20px;
                  line-height: 20px;
                  margin-left: auto;
                  margin-right: 5px;
                `}
                typographyType={'t7'}>
                즐겨찾기
              </Text>
              <Switch />
            </div>
            {allPlace.data.content.length ? (
              allPlace.data.content.map(place => (
                <PlaceSelectItem key={place.id} place={place} onClick={() => onClickItem(place)} />
              ))
            ) : (
              <EmptyContent />
            )}
          </MainContainer>
          {open && place && <Select place={place} onClose={() => setOpen(false)} />}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

interface Props {
  place: Place;
  onClick: () => void;
}

function PlaceSelectItem({ place, onClick }: Props) {
  return (
    <FlexRowCenterContainer>
      <PlaceItem place={place} />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: auto;
        `}>
        <button
          onClick={onClick}
          css={css`
            width: 60px;
            height: 40px;
            background-color: #efefef;
            border-radius: 6px;
            font-size: 12px;
            margin-left: 15px;

            &:hover {
              background-color: #dfdfdf;
            }
          `}>
          선택
        </button>
      </div>
    </FlexRowCenterContainer>
  );
}

export default PlacePage;
