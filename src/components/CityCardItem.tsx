import Text from '@components/Text';
import colors from '@constants/colors';
import { css } from '@emotion/react';

function CityCardItem() {
  return (
    <div
      css={css`
        width: 130px;
        height: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
      `}>
      <img
        css={css`
          position: absolute;
          object-fit: cover;
          border-radius: 12px;
          filter: brightness(80%);

          &:hover {
            transform: scale(1.08);
            transition: 0.5s;
            filter: brightness(100%);
          }
        `}
        width={130}
        height={170}
        src={'cities/jeju.jpeg'}
        alt={'city'}
      />
      <Text
        css={css`
          z-index: 1;
        `}
        typographyType={'t5'}
        fontWeight={500}
        color={colors.white}>
        제주도
      </Text>
    </div>
  );
}

export default CityCardItem;
