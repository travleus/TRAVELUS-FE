import { NextPage } from 'next';
import { Container, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '@constants/colors';
import Footer from '@components/Footer';
import { useEffect, useState } from 'react';
import { useFetchCourseByMember } from '@hooks/queries';
import Loading from '@components/Loading';
import { CourseDTO } from '@apis/course';
import { useRouter } from 'next/router';

const Plan: NextPage = () => {
  const [memberId, setMemberId] = useState(0);
  const fetchCourse = useFetchCourseByMember(memberId, 100, 0);

  useEffect(() => {
    setMemberId(Number(window.localStorage.getItem('id')));
  }, []);
  return (
    <>
      {fetchCourse.data ? (
        <Container>
          <BackButton />
          <TopContainer>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}>
              <img
                css={css`
                  margin-right: 15px;
                `}
                width={20}
                height={20}
                src={'/icons/plan_primary.png'}
                alt={'plan_icon'}
              />
              <Text typographyType={'t3'} fontWeight={600}>
                내 여행 계획
              </Text>
            </div>
          </TopContainer>
          <MainContainer>
            {fetchCourse.data.content.map((course, idx) => (
              <div key={idx}>
                <Text typographyType={'t5'} fontWeight={600} color={colors.text2}>
                  일정 {idx + 1}
                </Text>
                <PlanItem course={course} />
              </div>
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

interface Props {
  course: CourseDTO;
}

function PlanItem({ course }: Props) {
  const router = useRouter();

  return (
    <PlanItemWrapper onClick={() => router.push(`/menu/plan/${course.id}`)}>
      <CityWrapper>
        <img
          css={css`
            margin-right: 5px;
          `}
          width={20}
          height={20}
          src={'/icons/placeholder.png'}
          alt={'placeholder'}
        />
        <Text typographyType={'t6'} fontWeight={600} color={colors.text2}>
          {course.hotelList[0].region}
        </Text>
      </CityWrapper>
      <PlaceItemWrapper>
        <DotWrapper>
          <Dot color={colors.tag1} />
        </DotWrapper>
        <Text typographyType={'t7'}>{course.hotelList[0].name}</Text>
      </PlaceItemWrapper>
      <PlaceItemWrapper>
        <DotWrapper>
          <Dot color={colors.tag2} />
        </DotWrapper>
        <Text typographyType={'t7'}>{course.hotPlaceList[0].name}</Text>
      </PlaceItemWrapper>
      <PlaceItemWrapper>
        <DotWrapper>
          <Dot color={colors.tag3} />
        </DotWrapper>
        <Text typographyType={'t7'}>{course.restaurantList[0].name}</Text>
      </PlaceItemWrapper>
      <PlaceItemWrapper>
        <DotWrapper>
          <Dot color={colors.tag4} />
        </DotWrapper>
        <Text typographyType={'t7'}>{course.cafeList[0].name}</Text>
      </PlaceItemWrapper>
    </PlanItemWrapper>
  );
}

const PlanItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: ${colors.background};
  border-radius: 10px;
`;

const CityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const PlaceItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;

const DotWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Dot = styled.span<{ color: string }>`
  width: 7px;
  height: 7px;

  border: 1px solid white;
  border-radius: 100%;
  background-color: ${props => props.color};
`;

export default Plan;
