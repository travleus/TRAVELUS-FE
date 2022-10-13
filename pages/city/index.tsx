import { NextPage } from 'next';
import Text from '@components/Text';
import styled from '@emotion/styled';
import BackButton from '@components/BackButton';
import { useRouter } from 'next/router';

const AllCity: NextPage = () => {
  return (
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
        <Row>
          <City />
          <City />
          <City />
          <City />
        </Row>
        <Row>
          <City />
          <City />
          <City />
          <City />
        </Row>
        <Row>
          <City />
          <City />
          <City />
          <City />
        </Row>
        <Row>
          <City />
          <City />
          <City />
          <City />
        </Row>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const MainContainer = styled.div`
  padding-top: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 60px;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`;

function City() {
  const router = useRouter();

  return (
    <CityContainer onClick={() => router.push('/city/jeju')}>
      <CityImage src={'/cities/jeju.jpeg'} />
      <Text typographyType={'t7'} fontWeight={600}>
        제주도
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
