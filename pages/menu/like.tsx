import { NextPage } from 'next';
import { Container, FlexRowCenterContainer, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import { css } from '@emotion/react';
import Text from '@components/Text';
import LikeItem from '@components/LikeItem';
import Footer from '@components/Footer';
import { useFetchLikes } from '@hooks/queries';
import { useEffect, useState } from 'react';
import Loading from '@components/Loading';

const Like: NextPage = () => {
  const [memberId, setMemberId] = useState<number>(0);
  const hotelLikes = useFetchLikes('hotel', memberId);
  const sightsLikes = useFetchLikes('place', memberId);
  const restaurantLikes = useFetchLikes('restaurant', memberId);
  const cafeLikes = useFetchLikes('cafe', memberId);

  useEffect(() => {
    setMemberId(Number(window.localStorage.getItem('id')));
  }, [setMemberId]);

  return (
    <>
      {hotelLikes.data && sightsLikes.data && restaurantLikes.data && cafeLikes.data ? (
        <Container>
          <BackButton />
          <TopContainer>
            <FlexRowCenterContainer>
              <img
                css={css`
                  margin-right: 15px;
                `}
                width={20}
                height={20}
                src={'/icons/heart_active.png'}
                alt={'like_icon'}
              />
              <Text typographyType={'t3'} fontWeight={600}>
                찜 장소
              </Text>
            </FlexRowCenterContainer>
          </TopContainer>
          <MainContainer>
            {hotelLikes.data.content.map(place => (
              <LikeItem key={place.id} place={place} />
            ))}
            {sightsLikes.data.content.map(place => (
              <LikeItem key={place.id} place={place} />
            ))}
            {restaurantLikes.data.content.map(place => (
              <LikeItem key={place.id} place={place} />
            ))}
            {cafeLikes.data.content.map(place => (
              <LikeItem key={place.id} place={place} />
            ))}
          </MainContainer>
          <Footer />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Like;
