import { css } from '@emotion/react';
import Text from '@components/Text';
import TagItem from '@components/TagItem';
import colors from '@constants/colors';

function PlaceItem() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        cursor: pointer;
      `}>
      <img
        css={css`
          object-fit: cover;
          border-radius: 5px;
          margin-right: 10px;
        `}
        width={100}
        height={100}
        src={'/dummy.jpeg'}
        alt={'item'}
      />
      <div
        css={css`
          height: 100px;
        `}>
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 5px;
          `}>
          <Text
            css={css`
              margin-right: 5px;
            `}
            typographyType={'t6'}
            color={colors.text2}
            fontWeight={600}>
            에코랜드 테마파크
          </Text>
          <TagItem />
        </div>
        <Text typographyType={'t7'} color={colors.text3}>
          에코랜드는 제주특별 자치도 제주시 조천읍 대흘리에 위치한 테마파크이다.
        </Text>
      </div>
    </div>
  );
}

export default PlaceItem;
