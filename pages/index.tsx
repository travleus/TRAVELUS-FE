import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Text from '@components/Text';
import CityCardItem from '@components/CityCardItem';
import colors from '@constants/colors';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useRouter } from 'next/router';
import PlaceItem from '@components/PlaceItem';
import { useFetchRegionOrdered } from '@hooks/queries';
import Loading from '@components/Loading';

const Home: NextPage = () => {
  const router = useRouter();
  const regionOrdered = useFetchRegionOrdered(5, 1);

  return (
    <>
      {regionOrdered.data ? (
        <Container>
          <Header />
          <ContentBox>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                여행지
              </Text>
              <Text onClick={() => router.push('/city')} typographyType={'t6'} fontWeight={700} color={colors.primary2}>
                전체보기
              </Text>
            </ContentHeader>
            <ContentItemBox>
              {regionOrdered.data.content.map(region => (
                <CityCardItem key={region.id} region={region} />
              ))}
            </ContentItemBox>
          </ContentBox>
          <Divider />
          <ContentBox>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 명소
              </Text>
            </ContentHeader>
            <div>
              <PlaceItem />
              <PlaceItem />
              <PlaceItem />
            </div>
          </ContentBox>
          <Divider />
          <ContentBox>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 음식점
              </Text>
            </ContentHeader>
            <div>
              <PlaceItem />
              <PlaceItem />
              <PlaceItem />
            </div>
          </ContentBox>
          <Footer />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const ContentBox = styled.div`
  padding: 10px 30px 20px;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.background};
`;

export default Home;
