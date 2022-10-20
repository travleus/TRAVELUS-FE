import { AllHTMLAttributes, Fragment, ReactNode, Ref, forwardRef } from 'react';
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
  t8: 't8',
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
  t8: 10,
};

interface Props {
  children: ReactNode;
  typographyType: TypographyValue;
  fontWeight?: number;
  className?: string;
  color?: string;
}

type TextProps = Props & AllHTMLAttributes<HTMLSpanElement>;

function Text(props: TextProps, ref: Ref<HTMLElement>) {
  const { children, typographyType, fontWeight, color, className, onClick, ...rest } = props as TextProps;
  return (
    <span
      ref={ref}
      css={css`
        font-size: ${TypographyHash[typographyType]}px;
        font-weight: ${fontWeight};
        color: ${color};
        cursor: ${onClick ? 'pointer' : 'inherit'};
      `}
      className={className}
      onClick={onClick}
      {...rest}>
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

export default forwardRef(Text);
