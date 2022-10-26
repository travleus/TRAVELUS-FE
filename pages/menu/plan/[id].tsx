import { NextPage } from 'next';
import { Container, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { useRouter } from 'next/router';
import { useFetchCourseById } from '@hooks/queries';
import BottomCTA from '@components/BottomCTA';
import Loading from '@components/Loading';
import { css } from '@emotion/react';
import PlaceItem from '@components/PlaceItem';
import colors from '@constants/colors';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { deleteCourse } from '@apis/course';
import { useQueryClient } from '@tanstack/react-query';

const PlanDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetchCourse = useFetchCourseById(Number(id));
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchCourse.data) {
      if (fetchCourse.data.memberId !== Number(window.localStorage.getItem('id'))) router.push('/forbidden');
    }
  }, [fetchCourse, router]);

  const onClickDelete = async () => {
    try {
      setLoading(true);
      const courseId = Number(id);
      await deleteCourse(courseId);
      await queryClient.invalidateQueries(['courseList', Number(window.localStorage.getItem('id'))]);
      setLoading(false);
      await router.push('/menu/plan');
      await queryClient.invalidateQueries(['course', courseId]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {fetchCourse.data && !loading ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              계획 살펴보기
            </Text>
          </TopContainer>
          <MainContainer>
            <div
              css={css`
                display: flex;
                margin-bottom: 20px;
              `}>
              <IconImage src={'/icons/plan_primary.png'} alt={'plan'} />
              <Text typographyType={'t4'} fontWeight={700} color={colors.text2}>
                {fetchCourse.data.hotelList[0].region}
              </Text>
              <Text
                css={css`
                  line-height: 25px;
                `}
                typographyType={'t5'}
                fontWeight={500}
                color={colors.text2}>
                로 떠나시는군요!
              </Text>
            </div>
            <ItemWrapper>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  호텔
                </Text>
              </TextWrapper>
              <PlaceItem place={fetchCourse.data.hotelList[0]} />
            </ItemWrapper>
            <ItemWrapper>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  명소
                </Text>
              </TextWrapper>
              <PlaceItem place={fetchCourse.data.hotPlaceList[0]} />
            </ItemWrapper>
            <ItemWrapper>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  식당
                </Text>
              </TextWrapper>
              <PlaceItem place={fetchCourse.data.restaurantList[0]} />
            </ItemWrapper>
            <ItemWrapper>
              <TextWrapper>
                <IconImage src={'/icons/placeholder.png'} alt={'placeholder'} />
                <Text typographyType={'t5'} fontWeight={700} color={colors.text2}>
                  카페
                </Text>
              </TextWrapper>
              <PlaceItem place={fetchCourse.data.cafeList[0]} />
            </ItemWrapper>
          </MainContainer>
          <BottomCTA onClick={onClickDelete}>삭제</BottomCTA>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

const IconImage = styled.img`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  padding: 10px 10px 0;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export default PlanDetail;
