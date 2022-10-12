import { Fragment, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Hash } from '@utils/types';

const TypographyType = {
  t1: 't1',
  t2: 't2',
  t3: 't3',
  t4: 't4',
  t5: 't5',
  t6: 't6',
  t7: 't7',
} as const;

export type TypographyValue = typeof TypographyType[keyof typeof TypographyType];

const TypographyHash: Hash<number> = {
  t1: 24,
  t2: 22,
  t3: 20,
  t4: 18,
  t5: 16,
  t6: 14,
  t7: 12,
};

interface Props {
  children: ReactNode;
  typographyType: TypographyValue;
  fontWeight?: number;
  className?: string;
  color?: string;
}

function Text({ children, typographyType, fontWeight, color, className }: Props) {
  return (
    <span
      css={css`
        font-size: ${TypographyHash[typographyType]}px;
        font-weight: ${fontWeight};
        color: ${color};
      `}
      className={className}>
      {typeof children === 'string' ? convertNewLineToJSX(children) : children}
    </span>
  );
}

function convertNewLineToJSX(str: string) {
  return str.split('\n').map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : ''}
      {line}
    </Fragment>
  ));
}

export default Text;
