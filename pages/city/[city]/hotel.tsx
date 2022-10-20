import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { Container, MainContainer, TopContainer } from '@components/Container';
import PlaceItem from '@components/PlaceItem';
import { useFetchPlaceOrderedByRegion, useFetchRegion } from '@hooks/queries';
import { useRouter } from 'next/router';
import Loading from '@components/Loading';

const Hotel: NextPage = () => {
  const router = useRouter();
  const { city } = router.query;

  const region = useFetchRegion(Number(city));
  const hotelOrderedByRegion = useFetchPlaceOrderedByRegion('hotel', Number(city), 100, 0);

  return (
    <>
      {region.data && hotelOrderedByRegion ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              {region.data?.region}
            </Text>
            <Text typographyType={'t5'} fontWeight={700}>
              호텔
            </Text>
          </TopContainer>
          <MainContainer>
            {hotelOrderedByRegion.data?.content.map(hotel => (
              <PlaceItem key={hotel.id} place={hotel} />
            ))}
          </MainContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Hotel;
