import { NextPage } from 'next';
import { Container, MainContainer } from '@components/Container';
import BottomCTA from '@components/BottomCTA';
import { useRouter } from 'next/router';
import Text from '@components/Text';
import { css } from '@emotion/react';

const Complete: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <MainContainer
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}>
        <Text typographyType={'t6'} fontWeight={700}>
          완료되었습니다.
        </Text>
        <Text typographyType={'t6'} fontWeight={700}>
          확인을 누르면 메인 화면으로 돌아갑니다.
        </Text>
        <BottomCTA onClick={() => router.push('/')}>확인</BottomCTA>
      </MainContainer>
    </Container>
  );
};

export default Complete;
