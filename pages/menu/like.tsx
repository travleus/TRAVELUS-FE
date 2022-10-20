import { NextPage } from 'next';
import { Container, FlexRowCenterContainer, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import { css } from '@emotion/react';
import Text from '@components/Text';
import LikeItem from '@components/LikeItem';
import Footer from '@components/Footer';

const Like: NextPage = () => {
  return (
    <Container>
      <BackButton />
      <TopContainer>
        <FlexRowCenterContainer>
          <img
            css={css`
              margin-right: 15px;
            `}
            width={20}
            height={20}
            src={'/icons/heart_active.png'}
            alt={'like_icon'}
          />
          <Text typographyType={'t3'} fontWeight={600}>
            찜 장소
          </Text>
        </FlexRowCenterContainer>
      </TopContainer>
      <MainContainer>{/*<LikeItem place={}/>*/}</MainContainer>
      <Footer />
    </Container>
  );
};

export default Like;
