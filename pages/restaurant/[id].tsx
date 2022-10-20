import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import { css } from '@emotion/react';
import Text from '@components/Text';
import colors from '@constants/colors';
import BottomCTA from '@components/BottomCTA';
import { useFetchPlace } from '@hooks/queries';
import { useRouter } from 'next/router';
import Loading from '@components/Loading';
import TagList from '@components/TagItem';
import styled from '@emotion/styled';

const Hotel: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const restaurant = useFetchPlace('restaurant', Number(id));
  const tagList = restaurant.data?.tag.split('#').splice(1);

  const onClickButton = () => {
    // Todo
  };

  return (
    <>
      {restaurant.data && tagList ? (
        <div>
          <TopWrapper>
            <BackButton />
          </TopWrapper>
          <PlaceImage src={restaurant.data.pictureUrl} alt={restaurant.data.name} />
          <MainWrapper>
            <MainContentWrapper>
              <Text
                css={css`
                  margin-bottom: 5px;
                `}
                typographyType={'t7'}
                color={colors.text4}>
                {restaurant.data.region}
              </Text>
              <NameWrapper>
                <Text typographyType={'t5'} fontWeight={700}>
                  {restaurant.data.name}
                </Text>
                <Text
                  onClick={() => window.open(restaurant.data?.url)}
                  css={css`
                    margin-left: auto;
                    cursor: pointer;
                  `}
                  typographyType={'t6'}>
                  바로가기
                </Text>
              </NameWrapper>
              <Text
                css={css`
                  margin-bottom: 15px;
                `}
                typographyType={'t7'}
                color={colors.text4}>
                {restaurant.data.address}
              </Text>
              <Text typographyType={'t6'} color={colors.text2}>
                {restaurant.data.description}
              </Text>
            </MainContentWrapper>
            <TagWrapper>
              <Text typographyType={'t5'} fontWeight={600}>
                분류태그
              </Text>
              <TagListWrapper>
                <TagList tagList={tagList} mr={true} />
              </TagListWrapper>
            </TagWrapper>
            <BottomCTA onClick={onClickButton}>담아두기</BottomCTA>
          </MainWrapper>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

const TopWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const PlaceImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const MainWrapper = styled.div`
  padding: 15px;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameWrapper = styled.div`
  display: flex;
`;

const TagWrapper = styled.div`
  margin-top: 40px;
  height: 120px;
`;

const TagListWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

export default Hotel;
