import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { Container, MainContainer, TopContainer } from '@components/Container';
import PlaceItem from '@components/PlaceItem';

const Hotel: NextPage = () => {
  return (
    <Container>
      <BackButton />
      <TopContainer>
        <Text typographyType={'t3'} fontWeight={700}>
          제주도
        </Text>
        <Text typographyType={'t5'} fontWeight={700}>
          명소
        </Text>
      </TopContainer>
      <MainContainer>
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
      </MainContainer>
    </Container>
  );
};

export default Hotel;
