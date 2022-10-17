import { NextPage } from 'next';
import styled from '@emotion/styled';
import Text from '@components/Text';
import PlaceCardItem from '@components/PlaceCardItem';
import colors from '@constants/colors';
import CityCardItem from '@components/CityCardItem';
import Header from '@components/Header';
import { useRouter } from 'next/router';
import PlaceItem from '@components/PlaceItem';

const City: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <ContentBox>
        <CityCardItem filled={true} height={150} />
      </ContentBox>
      <ContentBox>
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
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </div>
      </ContentBox>
      <ContentBox>
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
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </div>
      </ContentBox>
      <ContentBox>
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
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </div>
      </ContentBox>
      <ContentBox>
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
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </div>
      </ContentBox>
    </div>
  );
};

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

export default City;
