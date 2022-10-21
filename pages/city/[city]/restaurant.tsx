import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { Container, MainContainer, TopContainer } from '@components/Container';
import PlaceItem from '@components/PlaceItem';
import { useFetchPlaceOrderedByRegion, useFetchRegion } from '@hooks/queries';
import { useRouter } from 'next/router';
import Loading from '@components/Loading';

const Restaurant: NextPage = () => {
  const router = useRouter();
  const { city } = router.query;

  const region = useFetchRegion(Number(city));
  const restaurantOrderedByRegion = useFetchPlaceOrderedByRegion('restaurant', Number(city), 100, 0);

  return (
    <>
      {region.data && restaurantOrderedByRegion ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              {region.data?.region}
            </Text>
            <Text typographyType={'t5'} fontWeight={700}>
              식당
            </Text>
          </TopContainer>
          <MainContainer>
            {restaurantOrderedByRegion.data?.content.map(restaurant => (
              <PlaceItem key={restaurant.id} place={restaurant} />
            ))}
          </MainContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Restaurant;
