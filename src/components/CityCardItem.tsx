import Text from '@components/Text';
import colors from '@constants/colors';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

interface Props {
  filled?: boolean;
  height?: number;
}

function CityCardItem({ filled = false, height = 170 }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/city/jeju')}
      css={css`
        width: ${filled ? '100%' : '120px'};
        height: ${height}px;
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
            transform: ${filled ? '' : 'scale(1.08)'};
            transition: 0.5s;
            filter: brightness(100%);
          }
        `}
        width={filled ? '100%' : '120px'}
        height={height}
        src={'/cities/jeju.jpeg'}
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
