import { useRouter } from 'next/router';
import { css } from '@emotion/react';

function BackButton() {
  const router = useRouter();

  return (
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
  );
}

export default BackButton;
