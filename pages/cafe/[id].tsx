import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import { css } from '@emotion/react';
import Text from '@components/Text';
import colors from '@constants/colors';
import BottomCTA from '@components/BottomCTA';
import { useFetchCheckLikes, useFetchPlace } from '@hooks/queries';
import { useRouter } from 'next/router';
import Loading from '@components/Loading';
import TagList from '@components/TagItem';
import styled from '@emotion/styled';
import { DeleteLikes, RegisterLikes, setLikes } from '@apis/likes';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
  MainContentWrapper,
  MainWrapper,
  NameWrapper,
  PlaceImage,
  TagWrapper,
  TagListWrapper,
  TopWrapper,
} from '@components/PlaceLayout';

const Cafe: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const cafe = useFetchPlace('cafe', Number(id));
  const tagList = cafe.data?.tag.split('#').splice(1);
  const queryClient = useQueryClient();
  const [memberId, setMemberId] = useState(0);
  const checkLikes = useFetchCheckLikes(memberId, 'CAFE', Number(id));

  const onClickButton = async () => {
    if (memberId === 0) {
      await router.push('/login');
      return;
    }

    try {
      let likes: DeleteLikes | RegisterLikes;
      if (checkLikes.data) {
        likes = {
          id: checkLikes.data.id,
          memberId: memberId,
          refId: Number(id),
        };
      } else {
        likes = {
          memberId: memberId,
          targetType: 'CAFE',
          refId: Number(id),
        };
      }
      await setLikes(likes);
      await queryClient.invalidateQueries(['likes']);
      await queryClient.invalidateQueries(['checkLikes']);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setMemberId(Number(window.localStorage.getItem('id')));
  }, []);

  return (
    <>
      {cafe.data && tagList ? (
        <>
          <TopWrapper>
            <BackButton />
          </TopWrapper>
          <PlaceImage src={cafe.data.pictureUrl} alt={cafe.data.name} />
          <MainWrapper>
            <MainContentWrapper>
              <Text
                css={css`
                  margin-bottom: 5px;
                `}
                typographyType={'t7'}
                color={colors.text4}>
                {cafe.data.region}
              </Text>
              <NameWrapper>
                <Text typographyType={'t5'} fontWeight={700}>
                  {cafe.data.name}
                </Text>
                <Text
                  onClick={() => window.open(cafe.data?.url)}
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
                {cafe.data.address}
              </Text>
              <Text typographyType={'t6'} color={colors.text2}>
                {cafe.data.description}
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
            <BottomCTA onClick={onClickButton}>{checkLikes.data ? '취소' : '찜하기'}</BottomCTA>
          </MainWrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Cafe;
