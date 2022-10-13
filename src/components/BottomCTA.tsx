import { ReactNode } from 'react';
import { css } from '@emotion/react';
import colors from '@constants/colors';

interface Props {
  onClick: () => void;
  children: ReactNode;
  height?: number;
}

function BottomCTA({ children, onClick, height = 48 }: Props) {
  return (
    <button
      css={css`
        background-color: ${colors.primary2};
        border: none;
        color: white;
        border-radius: 8px;
        width: 100%;
        height: ${height}px;
        cursor: pointer;

        &:hover {
          background-color: ${colors.primary1};
        }
      `}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default BottomCTA;
