import PlaceItem from '@components/PlaceItem';
import { FlexRowCenterContainer } from '@components/Container';
import { DeleteLikes, setLikes } from '@apis/likes';
import { useFetchPlace } from '@hooks/queries';
import { useQueryClient } from '@tanstack/react-query';
import styled from '@emotion/styled';

interface Props {
  id: number;
  refId: number;
  targetType: string;
}

function LikeItem({ id, refId, targetType }: Props) {
  const place = useFetchPlace(targetType, refId);
  const queryClient = useQueryClient();

  const onClickButton = async () => {
    try {
      const likes: DeleteLikes = {
        id: id,
        memberId: Number(window.localStorage.getItem('id')),
        refId: refId,
      };
      await setLikes(likes);
      await queryClient.invalidateQueries(['likes']);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {place.data && (
        <FlexRowCenterContainer>
          <PlaceItem place={place.data} />
          <CancelButton onClick={onClickButton}>취소</CancelButton>
        </FlexRowCenterContainer>
      )}
    </>
  );
}

const CancelButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #efefef;
  border-radius: 6px;
  font-size: 12px;
  margin-left: 10px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

export default LikeItem;
