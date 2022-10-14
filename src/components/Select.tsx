import { css } from '@emotion/react';
import Text from '@components/Text';
import colors from '@constants/colors';
import Modal from '@components/Modal';

interface Props {
  onClose: () => void;
}

function Select({ onClose }: Props) {
  return (
    <Modal>
      <Text
        css={css`
          margin-bottom: 10px;
        `}
        typographyType={'t5'}
        fontWeight={600}>
        선택된 도시
      </Text>
      <SelectItem onClose={onClose} />
    </Modal>
  );
}

function SelectItem({ onClose }: Props) {
  return (
    <div
      css={css`
        display: flex;
        height: 100px;
        width: 100%;
      `}>
      <img
        css={css`
          border-radius: 8px;
          filter: brightness(70%);
          margin-right: 15px;
        `}
        width={140}
        height={100}
        src={'/cities/jeju.jpeg'}
        alt={'city'}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}>
        <Text typographyType={'t6'} fontWeight={700} color={colors.text2}>
          제주도
        </Text>
        <Text typographyType={'t7'} fontWeight={600} color={colors.text4}>
          1028회 선택됨
        </Text>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: auto;
          height: 80px;
        `}>
        <button
          onClick={onClose}
          css={css`
            width: 60px;
            height: 40px;
            background-color: #efefef;
            border-radius: 6px;
            font-size: 12px;
            margin-right: 10px;

            &:hover {
              background-color: #dfdfdf;
            }
          `}>
          취소
        </button>
        <button
          css={css`
            width: 60px;
            height: 40px;
            background-color: ${colors.primary2};
            border-radius: 6px;
            font-size: 12px;
            color: white;

            &:hover {
              background-color: ${colors.primary1};
            }
          `}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Select;
