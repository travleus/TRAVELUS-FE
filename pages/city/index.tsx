import { NextPage } from 'next';
import Text from '@components/Text';
import styled from '@emotion/styled';
import BackButton from '@components/BackButton';
import { useRouter } from 'next/router';
import { Container, TopContainer, MainContainer } from '@components/Container';
import { useFetchAllRegion } from '@hooks/queries';
import { Region } from '@apis/region';
import Loading from '@components/Loading';

const AllCity: NextPage = () => {
  const allRegion = useFetchAllRegion();
  const totalArray = new Array(4).fill(0);

  return (
    <>
      {allRegion.data ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              어디로 떠날까요?
            </Text>
            <Text typographyType={'t5'} fontWeight={700}>
              여행지
            </Text>
          </TopContainer>
          <MainContainer>
            {totalArray.map((value, key) => (
              <Row key={key}>
                {totalArray.map(
                  (v, i) => allRegion.data && <City key={key + i} region={allRegion.data[4 * key + i]} />
                )}
              </Row>
            ))}
          </MainContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 60px;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`;

interface Props {
  region: Region;
}

function City({ region }: Props) {
  const router = useRouter();

  return (
    <CityContainer onClick={() => router.push(`/city/${region.id}`)}>
      <CityImage src={region.pictureUrl} />
      <Text typographyType={'t7'} fontWeight={600}>
        {region.region}
      </Text>
    </CityContainer>
  );
}

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const CityImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 3px;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export default AllCity;
