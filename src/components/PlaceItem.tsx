import { css } from '@emotion/react';
import Text from '@components/Text';
import TagItem from '@components/TagItem';
import colors from '@constants/colors';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function PlaceItem() {
  const router = useRouter();

  return (
    <Wrapper>
      <PlaceImage src={'/dummy.jpeg'} alt={'item'} />
      <ContentWrapper onClick={() => router.push('/hotel/1')}>
        <TitleWrapper>
          <Text
            css={css`
              margin-right: 5px;
            `}
            typographyType={'t6'}
            color={colors.text2}
            fontWeight={600}>
            에코랜드 테마파크
          </Text>
          <TagItem />
        </TitleWrapper>
        <Text typographyType={'t7'} color={colors.text3}>
          에코랜드는 제주특별 자치도 제주시 조천읍 대흘리에 위치한 테마파크이다.
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 15px;
`;

const PlaceImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100px;
  margin-right: 15px;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export default PlaceItem;
