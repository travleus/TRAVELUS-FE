import { css } from '@emotion/react';
import { useRouter } from 'next/router';

interface Props {
  width?: number;
  height?: number;
}

function AppLogo({ width = 100, height = 50 }: Props) {
  const router = useRouter();

  return (
    <img
      alt={'app_logo'}
      css={css`
        cursor: pointer;
        object-fit: contain;
      `}
      width={width}
      height={height}
      src={'/icons/logo.png'}
      onClick={() => router.push('/')}
    />
  );
}

export default AppLogo;
