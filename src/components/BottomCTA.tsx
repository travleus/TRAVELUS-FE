import { ReactNode } from 'react';
import { css } from '@emotion/react';
import colors from '@constants/colors';

interface Props {
  onClick: () => void;
  children: ReactNode;
  height?: number;
  className?: string;
}

function BottomCTA({ children, onClick, height = 48, className }: Props) {
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
        margin-top: auto;

        &:hover {
          background-color: ${colors.primary1};
        }
      `}
      className={className}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default BottomCTA;
