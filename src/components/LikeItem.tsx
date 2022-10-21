import PlaceItem from '@components/PlaceItem';
import { css } from '@emotion/react';
import { FlexRowCenterContainer } from '@components/Container';
import LazyImage from '@components/LazyImage';
import { Place } from '@apis/place';
import { DeleteLikes, setLikes } from '@apis/likes';

interface Props {
  place: Place;
}

function LikeItem({ place }: Props) {
  const onClickButton = async () => {
    try {
      const likes: DeleteLikes = {
        id: 1,
        memberId: Number(window.localStorage.getItem('id')),
        refId: place.id,
      };
      await setLikes(likes);
      console.log('success');
    } catch (e) {
      console.log('fail');
    }
  };

  return (
    <FlexRowCenterContainer>
      <PlaceItem place={place} />
      <LazyImage
        onClick={onClickButton}
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
