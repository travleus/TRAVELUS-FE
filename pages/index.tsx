import type { NextPage } from 'next';
import AppLogo from '@components/AppLogo';
import styled from '@emotion/styled';
import Text from '@components/Text';
import CityCardItem from '@components/CityCardItem';
import PlaceCardItem from '@components/PlaceCardItem';
import colors from '@constants/colors';

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <AppLogo />
      </Header>
      <ContentBox>
        <ContentHeader>
          <Text typographyType={'t5'} fontWeight={700}>
            여행지
          </Text>
          <Text typographyType={'t6'} fontWeight={700} color={colors.primary2}>
            전체보기
          </Text>
        </ContentHeader>
        <ContentItemBox>
          <CityCardItem />
          <CityCardItem />
          <CityCardItem />
          <CityCardItem />
          <CityCardItem />
        </ContentItemBox>
      </ContentBox>
      <Divider />
      <ContentBox>
        <ContentHeader>
          <Text typographyType={'t5'} fontWeight={700}>
            인기 명소
          </Text>
        </ContentHeader>
        <ContentItemBox>
          <PlaceCardItem />
          <PlaceCardItem />
          <PlaceCardItem />
        </ContentItemBox>
      </ContentBox>
      <Divider />
      <ContentBox>
        <ContentHeader>
          <Text typographyType={'t5'} fontWeight={700}>
            인기 음식점
          </Text>
        </ContentHeader>
        <ContentItemBox>
          <PlaceCardItem />
          <PlaceCardItem />
          <PlaceCardItem />
        </ContentItemBox>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 10px 30px 0;
`;

const ContentBox = styled.div`
  padding: 10px 30px 15px;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const ContentItemBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.background};
`;

export default Home;
