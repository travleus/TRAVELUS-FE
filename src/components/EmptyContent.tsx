import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';

function EmptyContent() {
  return (
    <div
      css={css`
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.background};
        border-radius: 5px;
        margin-bottom: 15px;
      `}>
      <Text typographyType={'t7'} fontWeight={500}>
        {' '}
        데이터 준비중입니다
      </Text>
    </div>
  );
}

export default EmptyContent;
