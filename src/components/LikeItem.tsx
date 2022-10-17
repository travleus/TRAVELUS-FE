import PlaceItem from '@components/PlaceItem';
import { css } from '@emotion/react';
import { FlexRowCenterContainer } from '@components/Container';

function LikeItem() {
  return (
    <FlexRowCenterContainer>
      <PlaceItem />
      <img
        css={css`
          margin-left: auto;
          cursor: pointer;
        `}
        width={10}
        height={10}
        src={'/icons/close.png'}
      />
    </FlexRowCenterContainer>
  );
}

export default LikeItem;
