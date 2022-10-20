import { Dot, FlexRowCenterContainer } from '@components/Container';
import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import useResize from '@hooks/useResize';

function PlanProgress() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      `}>
      <FlexRowCenterContainer>
        <PlaceHolder name={'제주'} />
        <ProgressDot />
        <PlaceHolder name={'에코랜드 테마파크'} />
        <ProgressDot />
        <PlaceHolder name={'회가서쪽에서뜨겟네'} />
        <ProgressDot />
        <PlaceHolder name={'에코랜드 테마파크'} />
        <ProgressDot />
        <PlaceHolder name={'에코랜드 테마파크'} />
      </FlexRowCenterContainer>
    </div>
  );
}

interface Props {
  name: string;
}

function PlaceHolder({ name }: Props) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5px;
        height: 60px;
      `}>
      <Text typographyType={'t8'}>여행지</Text>
      <img
        css={css`
          margin-top: 4px;
          margin-bottom: 6px;
        `}
        width={25}
        height={25}
        src={'/icons/placeholder.png'}
        alt={'placeholder'}
      />
      <Text
        css={css`
          @media screen and (max-width: 768px) {
            max-width: 36px;
          }
        `}
        typographyType={'t7'}
        fontWeight={500}>
        {name}
      </Text>
    </div>
  );
}

function ProgressDot() {
  const fullSize = useResize();
  const renderArrayForMobile = new Array(3).fill(0);
  const renderArrayForDesktop = new Array(5).fill(0);

  return (
    <>
      {fullSize
        ? renderArrayForDesktop.map((value, index) => (
            <Dot
              key={index}
              css={css`
                margin-right: 3px;
              `}
              color={colors.red}
            />
          ))
        : renderArrayForMobile.map((value, index) => (
            <Dot
              key={index}
              css={css`
                margin-right: 3px;
              `}
              color={colors.red}
            />
          ))}
    </>
  );
}

export default PlanProgress;
