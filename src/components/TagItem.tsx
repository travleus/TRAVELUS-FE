import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';

interface Props {
  mr?: boolean;
}

function TagItem({ mr = false }: Props) {
  return (
    <div
      css={css`
        width: 50px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.tag4};
        border-radius: 50px;
        margin-right: ${mr ? '5px' : '0'};
        margin-left: ${mr ? '0' : '5px'};
      `}>
      <Text typographyType={'t7'} color={colors.white}>
        자연
      </Text>
    </div>
  );
}

export default TagItem;
