import { NextPage } from 'next';
import { Container, MainContainer, TopContainer } from '@components/Container';
import Text from '@components/Text';
import { useRouter } from 'next/router';
import usePlan from '@stores/plan/planHook';
import { useFetchPlaceWithTag } from '@hooks/queries';
import { useCallback, useEffect, useState } from 'react';
import { Place } from '@apis/place';
import PlaceItem from '@components/PlaceItem';
import BottomCTA from '@components/BottomCTA';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '@constants/colors';
import BackButton from '@components/BackButton';
import Lottie from '@components/Lottie';

interface Item {
  hotel: Place;
  sights: Place;
  restaurant: Place;
  cafe: Place;
}

const Theme: NextPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { plan, onNextStep, onInitStep } = usePlan();
  const fetchHotel = useFetchPlaceWithTag('hotel', plan.region?.id as number, tag as string);
  const fetchSights = useFetchPlaceWithTag('hotplace', plan.region?.id as number, tag as string);
  const fetchRestaurant = useFetchPlaceWithTag('restaurant', plan.region?.id as number, tag as string);
  const fetchCafe = useFetchPlaceWithTag('cafe', plan.region?.id as number, tag as string);
  const [item, setItem] = useState<Item | null>(null);

  const createRandom = useCallback(() => {
    return Math.floor(Math.random() * 10) % 3;
  }, []);

  const onSettingItem = () => {
    setItem(null);
    if (fetchHotel.data && fetchSights.data && fetchRestaurant.data && fetchCafe.data) {
      setItem({
        hotel: fetchHotel.data.content[createRandom()],
        sights: fetchSights.data.content[createRandom()],
        restaurant: fetchRestaurant.data.content[createRandom()],
        cafe: fetchCafe.data.content[createRandom()],
      });
    }
  };

  const onClickNextButton = async () => {
    if (item) {
      await onNextStep(item.hotel);
      await onNextStep(item.sights);
      await onNextStep(item.restaurant);
      await onNextStep(item.cafe);
      await router.push('/plan/complete');
    }
  };

  useEffect(() => {
    onInitStep('hotel');
  }, []);

  useEffect(() => {
    plan.region || router.push('/plan');
  }, [plan, router]);

  useEffect(() => {
    if (
      fetchHotel.data?.content.length &&
      fetchSights.data?.content.length &&
      fetchRestaurant.data?.content.length &&
      fetchCafe.data?.content.length
    ) {
      setTimeout(() => {
        onSettingItem();
      }, 5000);
    }
  }, [fetchHotel.data, fetchSights.data, fetchRestaurant.data, fetchCafe.data]);

  return (
    <Container>
      <BackButton />
      <TopContainer>
        <Text typographyType={'t3'} fontWeight={700}>
          여행 루트 만들기
        </Text>
        <Text typographyType={'t6'} fontWeight={700}>
          #{tag}
        </Text>
      </TopContainer>
      <MainContainer>
        {item ? (
          <div>
            <ItemWrapper delay={0}>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  호텔
                </Text>
              </TextWrapper>
              <PlaceItem place={item.hotel} click={false} />
            </ItemWrapper>
            <ItemWrapper delay={1}>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  명소
                </Text>
              </TextWrapper>
              <PlaceItem place={item.sights} click={false} />
            </ItemWrapper>
            <ItemWrapper delay={2}>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  식당
                </Text>
              </TextWrapper>
              <PlaceItem place={item.restaurant} click={false} />
            </ItemWrapper>
            <ItemWrapper delay={3}>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  카페
                </Text>
              </TextWrapper>
              <PlaceItem place={item.cafe} click={false} />
            </ItemWrapper>
            <div
              css={css`
                margin-top: 35px;
              `}>
              <BottomCTA
                css={css`
                  margin-bottom: 10px;
                  background-color: ${colors.primary3};
                  color: ${colors.primary1};

                  &:hover {
                    background-color: ${colors.primary4};
                  }
                `}
                onClick={onSettingItem}>
                추천 다시받기
              </BottomCTA>
              <BottomCTA onClick={onClickNextButton}>다음</BottomCTA>
            </div>
          </div>
        ) : (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            `}>
            <Lottie
              css={css`
                width: 80%;
              `}
              src={'https://assets9.lottiefiles.com/private_files/lf30_7odhy5qj.json'}
            />
            <Text
              typographyType={'t5'}
              fontWeight={500}
              css={css`
                margin-top: 20px;
              `}>
              추천루트를 조회하고 있어요
            </Text>
            <Text
              typographyType={'t6'}
              fontWeight={500}
              color={colors.text4}
              css={css`
                margin-top: 10px;
              `}>
              사람들이 많이 선택한 장소를 기준으로 추천합니다
            </Text>
          </div>
        )}
      </MainContainer>
    </Container>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ItemWrapper = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  padding: 10px 10px 0;
  border-radius: 10px;
  margin-bottom: 10px;

  opacity: 0;
  animation: ${FadeIn} 3s forwards ${props => props.delay}s;
`;

const IconImage = styled.img`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export default Theme;
