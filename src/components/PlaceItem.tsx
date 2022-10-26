import { css } from '@emotion/react';
import Text from '@components/Text';
import colors from '@constants/colors';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import LazyImage from '@components/LazyImage';
import { Place } from '@apis/place';
import TagList from '@components/TagItem';
import { TargetTypeHash } from '@utils/types';

interface Props {
  place: Place;
  region?: boolean;
  click?: boolean;
}

function PlaceItem({ place, region = false, click = true }: Props) {
  const router = useRouter();
  const tagList = place.tag.split('#').splice(1);

  return (
    <Wrapper>
      <LazyImage
        css={css`
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 5px;
          margin-right: 10px;

          @media screen and (max-width: 768px) {
            width: 80px;
            height: 80px;
          }
        `}
        src={place.pictureUrl}
        alt={place.name}
      />
      <ContentWrapper
        click={click}
        onClick={() => click && router.push(`/${TargetTypeHash[place.targetType]}/${place.id}`)}>
        {region && (
          <Text typographyType={'t8'} color={colors.text4}>
            {place.region}
          </Text>
        )}
        <TitleWrapper>
          <Text
            css={css`
              margin-right: 5px;
            `}
            typographyType={'t6'}
            color={colors.text2}
            fontWeight={600}>
            {place.name}
          </Text>
          <TagList tagList={tagList} />
        </TitleWrapper>
        <Text
          css={css`
            display: inline-block;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
          `}
          typographyType={'t7'}
          color={colors.text3}>
          {place.description}
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

const ContentWrapper = styled.div<{ click: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100px;
  cursor: ${props => (props.click ? 'pointer' : 'initial')};

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export default PlaceItem;
