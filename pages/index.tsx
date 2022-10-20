import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Text from '@components/Text';
import CityCardItem from '@components/CityCardItem';
import colors from '@constants/colors';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useRouter } from 'next/router';
import { useFetchPlaceOrdered, useFetchRegionOrdered } from '@hooks/queries';
import Loading from '@components/Loading';
import { ContentContainer, Divider } from '@components/Container';
import PlaceItem from '@components/PlaceItem';

const Home: NextPage = () => {
  const router = useRouter();
  const regionOrdered = useFetchRegionOrdered(5, 0);
  const hotelOrdered = useFetchPlaceOrdered('hotel', 3, 0);
  const sightsOrdered = useFetchPlaceOrdered('hotplace', 3, 0);
  const restaurantOrdered = useFetchPlaceOrdered('restaurant', 3, 0);
  const cafeOrdered = useFetchPlaceOrdered('cafe', 3, 0);

  return (
    <>
      {regionOrdered.data ? (
        <Container>
          <Header />
          <ContentContainer>
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
          </ContentContainer>
          <Divider />
          <ContentContainer>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 호텔
              </Text>
            </ContentHeader>
            <div>
              {hotelOrdered.data?.content.map(hotel => (
                <PlaceItem key={hotel.id} place={hotel} region={true} />
              ))}
            </div>
          </ContentContainer>
          <Divider />
          <ContentContainer>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 명소
              </Text>
            </ContentHeader>
            <div>
              {sightsOrdered.data?.content.map(sights => (
                <PlaceItem key={sights.id} place={sights} region={true} />
              ))}
            </div>
          </ContentContainer>
          <Divider />
          <ContentContainer>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 음식점
              </Text>
            </ContentHeader>
            <div>
              {restaurantOrdered.data?.content.map(restaurant => (
                <PlaceItem key={restaurant.id} place={restaurant} region={true} />
              ))}
            </div>
          </ContentContainer>
          <Divider />
          <ContentContainer>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 카페
              </Text>
            </ContentHeader>
            <div>
              {cafeOrdered.data?.content.map(cafe => (
                <PlaceItem key={cafe.id} place={cafe} region={true} />
              ))}
            </div>
          </ContentContainer>
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

export default Home;
