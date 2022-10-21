import { useRouter } from 'next/router';
import { css } from '@emotion/react';

interface Props {
  showHome?: boolean;
}

function BackButton({ showHome = false }: Props) {
  const router = useRouter();

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
      `}>
      <img
        css={css`
          cursor: pointer;
        `}
        width={30}
        height={30}
        src={'/icons/left.png'}
        alt={'back_ico'}
        onClick={router.back}
      />
      {showHome && (
        <img
          css={css`
            cursor: pointer;
            margin-left: auto;
          `}
          width={20}
          height={20}
          src={'/icons/home_active.png'}
          alt={'back_ico'}
          onClick={() => router.push('/')}
        />
      )}
    </div>
  );
}

export default BackButton;
