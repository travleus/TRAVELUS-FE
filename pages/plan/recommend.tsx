import { NextPage } from 'next';
import { Container, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { keyframes } from '@emotion/react';
import colors from '@constants/colors';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import usePlan from '@stores/plan/planHook';

const Recommend: NextPage = () => {
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
          테마 선택하기
        </Text>
      </TopContainer>
      <MainContainer>
        <Wrapper>
          <Text typographyType={'t6'} fontWeight={500}>
            원하는 테마를 선택해주세요
          </Text>
          <Text typographyType={'t7'} fontWeight={500} color={colors.text4}>
            선택하신 테마로 여행루트가 자동추천으로 만들어집니다
          </Text>
          <TagButton color={colors.tag1} delay={0} onClick={() => router.push('/plan/theme?tag=도심')}>
            #도심
          </TagButton>
          <TagButton color={colors.tag2} delay={1} onClick={() => router.push('/plan/theme?tag=로컬')}>
            #로컬
          </TagButton>
          <TagButton color={colors.tag5} delay={2} onClick={() => router.push('/plan/theme?tag=감성')}>
            #감성
          </TagButton>
          <TagButton color={colors.tag4} delay={3} onClick={() => router.push('/plan/theme?tag=자연')}>
            #자연
          </TagButton>
        </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const TagButton = styled.button<{ color: string; delay: number }>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  opacity: 0;
  background-color: ${props => props.color};
  animation: ${FadeIn} 3s forwards ${props => props.delay}s;
  color: white;
  margin-top: 20px;
`;

export default Recommend;
