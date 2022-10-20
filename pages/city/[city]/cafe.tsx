import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { Container, MainContainer, TopContainer } from '@components/Container';
import PlaceItem from '@components/PlaceItem';
import { useFetchPlaceOrderedByRegion, useFetchRegion } from '@hooks/queries';
import { useRouter } from 'next/router';
import Loading from '@components/Loading';

const Cafe: NextPage = () => {
  const router = useRouter();
  const { city } = router.query;

  const region = useFetchRegion(Number(city));
  const cafeOrderedByRegion = useFetchPlaceOrderedByRegion('cafe', Number(city), 100, 0);

  return (
    <>
      {region.data && cafeOrderedByRegion ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              {region.data?.region}
            </Text>
            <Text typographyType={'t5'} fontWeight={700}>
              카페
            </Text>
          </TopContainer>
          <MainContainer>
            {cafeOrderedByRegion.data?.content.map(cafe => (
              <PlaceItem key={cafe.id} place={cafe} />
            ))}
          </MainContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Cafe;
