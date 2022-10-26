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
import { useRouter } from 'next/router';

const Like: NextPage = () => {
  const router = useRouter();
  const [memberId, setMemberId] = useState<number>(0);
  const hotelLikes = useFetchLikes('hotel', memberId);
  const sightsLikes = useFetchLikes('place', memberId);
  const restaurantLikes = useFetchLikes('restaurant', memberId);
  const cafeLikes = useFetchLikes('cafe', memberId);

  useEffect(() => {
    window.localStorage.getItem('id') ? setMemberId(Number(window.localStorage.getItem('id'))) : router.push('/login');
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
              <LikeItem key={place.id} id={place.id} refId={place.refId} targetType={'hotel'} />
            ))}
            {sightsLikes.data.content.map(place => (
              <LikeItem key={place.id} id={place.id} refId={place.refId} targetType={'hotplace'} />
            ))}
            {restaurantLikes.data.content.map(place => (
              <LikeItem key={place.id} id={place.id} refId={place.refId} targetType={'restaurant'} />
            ))}
            {cafeLikes.data.content.map(place => (
              <LikeItem key={place.id} id={place.id} refId={place.refId} targetType={'cafe'} />
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
