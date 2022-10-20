import { NextPage } from 'next';
import styled from '@emotion/styled';
import Text from '@components/Text';
import colors from '@constants/colors';
import CityCardItem from '@components/CityCardItem';
import Header from '@components/Header';
import { useRouter } from 'next/router';
import PlaceItem from '@components/PlaceItem';
import { useFetchPlaceOrderedByRegion, useFetchRegion } from '@hooks/queries';
import Loading from '@components/Loading';
import EmptyContent from '@components/EmptyContent';
import { ContentContainer } from '@components/Container';

const City: NextPage = () => {
  const router = useRouter();
  const { city } = router.query;

  const region = useFetchRegion(Number(city));
  const hotelOrderedByRegion = useFetchPlaceOrderedByRegion('hotel', Number(city), 3, 0);
  const sightsOrderedByRegion = useFetchPlaceOrderedByRegion('hotplace', Number(city), 3, 0);
  const restaurantOrderedByRegion = useFetchPlaceOrderedByRegion('restaurant', Number(city), 3, 0);
  const cafeOrderedByRegion = useFetchPlaceOrderedByRegion('cafe', Number(city), 3, 0);

  return (
    <>
      {region.data &&
      hotelOrderedByRegion.data &&
      sightsOrderedByRegion.data &&
      restaurantOrderedByRegion.data &&
      cafeOrderedByRegion.data ? (
        <div>
          <Header />
          <ContentContainer>
            {region.data && <CityCardItem filled={true} height={100} region={region.data} />}
          </ContentContainer>
          <ContentContainer>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 호텔
              </Text>
              <Text
                onClick={() => router.push(router.asPath + '/hotel')}
                typographyType={'t6'}
                fontWeight={700}
                color={colors.primary2}>
                전체보기
              </Text>
            </ContentHeader>
            <div>
              {hotelOrderedByRegion.data.content.length ? (
                hotelOrderedByRegion.data.content.map(place => <PlaceItem key={place.id} place={place} />)
              ) : (
                <EmptyContent />
              )}
            </div>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 명소
              </Text>
              <Text
                onClick={() => router.push(router.asPath + '/sights')}
                typographyType={'t6'}
                fontWeight={700}
                color={colors.primary2}>
                전체보기
              </Text>
            </ContentHeader>
            <div>
              {sightsOrderedByRegion.data.content.length ? (
                sightsOrderedByRegion.data.content.map(place => <PlaceItem key={place.id} place={place} />)
              ) : (
                <EmptyContent />
              )}
            </div>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 음식점
              </Text>
              <Text
                onClick={() => router.push(router.asPath + '/restaurant')}
                typographyType={'t6'}
                fontWeight={700}
                color={colors.primary2}>
                전체보기
              </Text>
            </ContentHeader>
            <div>
              {restaurantOrderedByRegion.data.content.length ? (
                restaurantOrderedByRegion.data.content.map(place => <PlaceItem key={place.id} place={place} />)
              ) : (
                <EmptyContent />
              )}
            </div>
            <ContentHeader>
              <Text typographyType={'t5'} fontWeight={700}>
                인기 카페
              </Text>
              <Text
                onClick={() => router.push(router.asPath + '/cafe')}
                typographyType={'t6'}
                fontWeight={700}
                color={colors.primary2}>
                전체보기
              </Text>
            </ContentHeader>
            <div>
              {cafeOrderedByRegion.data.content.length ? (
                cafeOrderedByRegion.data.content.map(place => <PlaceItem key={place.id} place={place} />)
              ) : (
                <EmptyContent />
              )}
            </div>
          </ContentContainer>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export default City;
