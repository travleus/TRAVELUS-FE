import { css } from '@emotion/react';
import Text from '@components/Text';
import colors from '@constants/colors';
import Modal from '@components/Modal';
import { Region } from '@apis/region';
import { Place } from '@apis/place';
import styled from '@emotion/styled';
import usePlan from '@stores/plan/planHook';
import { useRouter } from 'next/router';

interface Props {
  place: Region | Place;
  onClose: () => void;
}

function Select({ place, onClose }: Props) {
  return (
    <Modal>
      <Text
        css={css`
          margin-bottom: 10px;
        `}
        typographyType={'t6'}
        fontWeight={600}>
        선택된 장소
      </Text>
      <SelectItem place={place} onClose={onClose} />
    </Modal>
  );
}

function SelectItem({ onClose, place }: Props) {
  const router = useRouter();
  const { plan, onNextStep } = usePlan();

  const onClickNextButton = async () => {
    await onNextStep(place);
    switch (plan.step) {
      case 1:
        await router.push('/plan/choice');
        break;
      case 2:
        await router.push('/plan/place?target=hotplace');
        break;
      case 3:
        await router.push('/plan/place?target=restaurant');
        break;
      case 4:
        await router.push('/plan/place?target=cafe');
        break;
      case 5:
        await router.push('/plan/complete');
        break;
    }
  };

  return (
    <ItemWrapper>
      <ItemImage src={place.pictureUrl} alt={'place'} />
      <TextWrapper>
        <Text typographyType={'t6'} fontWeight={700} color={colors.text2}>
          {'name' in place ? place.name : place.region}
        </Text>
        <Text typographyType={'t7'} fontWeight={600} color={colors.text4}>
          {place.useCount}회 선택됨
        </Text>
      </TextWrapper>
      <ButtonWrapper>
        <CancelButton onClick={onClose}>취소</CancelButton>
        <NextButton onClick={onClickNextButton}>다음</NextButton>
      </ButtonWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
`;

const ItemImage = styled.img`
  width: 140px;
  height: 100px;
  border-radius: 6px;
  filter: brightness(70%);
  margin-right: 15px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  height: 80px;
`;

const CancelButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #efefef;
  border-radius: 6px;
  font-size: 12px;
  margin-right: 10px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const NextButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: ${colors.primary2};
  border-radius: 6px;
  font-size: 12px;
  color: white;

  &:hover {
    background-color: ${colors.primary1};
  }
`;

export default Select;
