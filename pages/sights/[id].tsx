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

const Sights: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const sights = useFetchPlace('hotplace', Number(id));
  const tagList = sights.data?.tag.split('#').splice(1);
  const queryClient = useQueryClient();
  const [memberId, setMemberId] = useState(0);
  const checkLikes = useFetchCheckLikes(memberId, 'HOT_PLACE', Number(id));

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
          targetType: 'HOT_PLACE',
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
      {sights.data && tagList ? (
        <>
          <TopWrapper>
            <BackButton />
          </TopWrapper>
          <PlaceImage src={sights.data.pictureUrl} alt={sights.data.name} />
          <MainWrapper>
            <MainContentWrapper>
              <Text
                css={css`
                  margin-bottom: 5px;
                `}
                typographyType={'t7'}
                color={colors.text4}>
                {sights.data.region}
              </Text>
              <NameWrapper>
                <Text typographyType={'t5'} fontWeight={700}>
                  {sights.data.name}
                </Text>
                <Text
                  onClick={() => window.open(sights.data?.url)}
                  css={css`
                    margin-left: auto;
                    cursor: pointer;
                  `}
                  typographyType={'t7'}
                  fontWeight={500}
                  color={colors.primary2}>
                  ????????????
                </Text>
              </NameWrapper>
              <Text
                css={css`
                  margin-bottom: 15px;
                `}
                typographyType={'t7'}
                color={colors.text4}>
                {sights.data.address}
              </Text>
              <Text typographyType={'t6'} color={colors.text2}>
                {sights.data.description}
              </Text>
            </MainContentWrapper>
            <TagWrapper>
              <Text typographyType={'t5'} fontWeight={600}>
                ????????????
              </Text>
              <TagListWrapper>
                <TagList tagList={tagList} mr={true} />
              </TagListWrapper>
            </TagWrapper>
            <BottomCTA onClick={onClickButton}>{checkLikes.data ? '??????' : '?????????'}</BottomCTA>
          </MainWrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Sights;
