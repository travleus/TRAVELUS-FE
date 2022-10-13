import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import TagItem from '@components/TagItem';

function PlaceCardItem() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        cursor: pointer;
      `}>
      <img
        alt={'place'}
        css={css`
          border-radius: 5px;
          margin-bottom: 5px;
        `}
        width={210}
        height={180}
        src={'/dummy.jpeg'}
      />
      <Text typographyType={'t7'} color={colors.text3}>
        제주도
      </Text>
      <Text typographyType={'t6'} color={colors.text1}>
        에코랜드 테마파크
      </Text>
      <div
        css={css`
          margin-top: 6px;
          margin-left: auto;
          display: flex;
        `}>
        <TagItem />
        <TagItem />
        <TagItem />
      </div>
    </div>
  );
}

export default PlaceCardItem;
