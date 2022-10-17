import { NextPage } from 'next';
import BackButton from '@components/BackButton';
import { css } from '@emotion/react';
import Text from '@components/Text';
import colors from '@constants/colors';
import TagItem from '@components/TagItem';
import BottomCTA from '@components/BottomCTA';

const Hotel: NextPage = () => {
  const onClickButton = () => {
    // Todo
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          height: 50px;
          align-items: center;
        `}>
        <BackButton />
      </div>
      <img
        css={css`
          width: 100%;
          height: 500px;
          object-fit: cover;
        `}
        src={'/dummy.jpeg'}
        alt={'dummy'}
      />

      <div
        css={css`
          padding: 15px;
        `}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}>
          <Text
            css={css`
              margin-bottom: 5px;
            `}
            typographyType={'t7'}
            color={colors.text4}>
            제주도
          </Text>
          <div
            css={css`
              display: flex;
            `}>
            <Text typographyType={'t5'} fontWeight={700}>
              에코랜드 테마파크
            </Text>
            <Text
              css={css`
                margin-left: auto;
                cursor: pointer;
              `}
              typographyType={'t6'}>
              바로가기
            </Text>
          </div>
          <Text
            css={css`
              margin-bottom: 15px;
            `}
            typographyType={'t7'}
            color={colors.text4}>
            제주 제주시 조천읍 번영로 1278-169
          </Text>
          <Text typographyType={'t6'} color={colors.text2}>
            에코랜드는 제주특별자치도 제주시 조천읍 대흘리에 위치한 테마파크이다. 에코랜드 테마파크와 에코랜드
            골프&리조트으로 나뉜다. 테마파크는 기차를 타며 숲을 구경할 수 있게 되어 있으며 숲은 각각 4개의 역으로
            구성되어있다. 기차를 타고 간이역으로 내려 관람할 수 있다.
          </Text>
        </div>

        <div
          css={css`
            margin-top: 40px;
            height: 120px;
          `}>
          <Text typographyType={'t5'} fontWeight={600}>
            분류태그
          </Text>
          <div
            css={css`
              display: flex;
              margin-top: 5px;
            `}>
            <TagItem mr={true} />
            <TagItem mr={true} />
          </div>
        </div>
        <BottomCTA onClick={onClickButton}>담아두기</BottomCTA>
      </div>
    </div>
  );
};

export default Hotel;
