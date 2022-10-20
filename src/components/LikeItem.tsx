import PlaceItem from '@components/PlaceItem';
import { css } from '@emotion/react';
import { FlexRowCenterContainer } from '@components/Container';
import LazyImage from '@components/LazyImage';
import { Place } from '@apis/place';

interface Props {
  place: Place;
}

function LikeItem({ place }: Props) {
  return (
    <FlexRowCenterContainer>
      <PlaceItem place={place} />
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
