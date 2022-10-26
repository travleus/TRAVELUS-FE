import { NextPage } from 'next';
import { Container, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import BottomCTA from '@components/BottomCTA';
import usePlan from '@stores/plan/planHook';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Choice: NextPage = () => {
  const router = useRouter();
  const { plan } = usePlan();

  useEffect(() => {
    plan.region || router.push('/plan');
  }, [plan, router]);

  return (
    <Container>
      <BackButton showHome={true} />
      <TopContainer>
        <Text typographyType={'t3'} fontWeight={700}>
          여행 루트 만들기
        </Text>
        <Text typographyType={'t6'} fontWeight={700}>
          {plan.region?.region}
        </Text>
      </TopContainer>
      <MainContainer
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        `}>
        <img
          css={css`
            width: 50%;
            height: 250px;
            border-radius: 6px;
            object-fit: cover;

            @media screen and (max-width: 768px) {
              width: 100%;
              height: 250px;
            }
          `}
          src={plan.region?.pictureUrl}
          alt={'picture'}
        />
      </MainContainer>
      <div
        css={css`
          margin-top: auto;
        `}>
        <Text typographyType={'t6'} fontWeight={600} color={colors.text2}>
          당신의 여행 스타일을 선택해주세요
        </Text>
        <BottomCTA
          css={css`
            margin: 10px 0;
            background-color: ${colors.green2};

            &:hover {
              background-color: ${colors.green1};
            }
          `}
          onClick={() => router.push('/plan/place?target=hotel')}>
          코스선택
        </BottomCTA>
        <BottomCTA onClick={() => router.push('/plan/recommend')}>코스추천</BottomCTA>
      </div>
    </Container>
  );
};

export default Choice;
