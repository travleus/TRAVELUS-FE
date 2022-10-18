import PlaceItem from '@components/PlaceItem';
import { css } from '@emotion/react';
import { FlexRowCenterContainer } from '@components/Container';
import LazyImage from '@components/LazyImage';

function LikeItem() {
  return (
    <FlexRowCenterContainer>
      <PlaceItem />
      <LazyImage
        css={css`
          width: 10px;
          height: 10px;
          margin-left: auto;
          cursor: pointer;
        `}
        src={'/icons/close.png'}
        alt={'close_icon'}
      />
    </FlexRowCenterContainer>
  );
}

export default LikeItem;
