import { NextPage } from 'next';
import { Container, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import PlanProgress from '@components/PlanProgress';
import BottomCTA from '@components/BottomCTA';
import { css, keyframes } from '@emotion/react';
import colors from '@constants/colors';
import usePlan from '@stores/plan/planHook';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { registerCourse, RegisterCourse } from '@apis/course';
import { useQueryClient } from '@tanstack/react-query';
import Loading from '@components/Loading';

const Complete: NextPage = () => {
  const router = useRouter();
  const { plan, onInitStep } = usePlan();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (plan.step !== 6) router.push('/plan');
  }, []);

  const onClickButton = async () => {
    try {
      setLoading(true);
      const memberId = Number(window.localStorage.getItem('id'));
      const course: RegisterCourse = {
        memberId: memberId,
        regionId: plan.region?.id as number,
        cafeIds: `#${plan.cafe?.id}`,
        hotelIds: `#${plan.hotel?.id}`,
        restaurantIds: `#${plan.restaurant?.id}`,
        placeIds: `#${plan.sights?.id}`,
      };
      await registerCourse(course);
      await queryClient.invalidateQueries(['courseList', memberId]);
      await router.push('/complete');
      setLoading(false);
      onInitStep('region');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              여행 루트 만들기
            </Text>
            <Text typographyType={'t6'} fontWeight={700} color={colors.text2}>
              계획이 완성되었습니다
            </Text>
          </TopContainer>
          <MainContainer
            css={css`
              display: flex;
              flex-direction: column;
              flex: 1;
            `}>
            <div
              css={css`
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;

                animation: ${FadeIn} 3s forwards;
              `}>
              <PlanProgress />
            </div>
            <div>
              <Text
                css={css`
                  display: inline-block;
                  margin-bottom: 15px;
                  opacity: 0;
                  animation: ${FadeIn} 3s forwards 1s;
                `}
                typographyType={'t5'}
                fontWeight={700}
                color={colors.text2}>
                선택하신 계획이 마음에 드시나요?
              </Text>
              <BottomCTA
                css={css`
                  opacity: 0;
                  animation: ${FadeIn} 3s forwards 2s;
                `}
                onClick={onClickButton}>
                루트 추가하기
              </BottomCTA>
            </div>
          </MainContainer>
        </Container>
      )}
    </>
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

export default Complete;
