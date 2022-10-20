import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import { Hash } from '@utils/types';

interface Props {
  tagList: Array<string>;
  mr?: boolean;
}

function TagList({ tagList, mr = false }: Props) {
  return (
    <>
      {tagList.map(tag => (
        <TagItem key={tag} tag={tag} mr={mr} />
      ))}
    </>
  );
}

interface TagProps {
  mr?: boolean;
  tag: string;
}

const TagColorHash: Hash<string> = {
  로컬: colors.tag1,
  감성: colors.tag2,
  도심: colors.tag3,
  자연: colors.tag4,
};

function TagItem({ mr = false, tag }: TagProps) {
  return (
    <div
      css={css`
        width: 40px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${TagColorHash[tag]};
        border-radius: 50px;
        margin-right: ${mr ? '5px' : '0'};
        margin-left: ${mr ? '0' : '5px'};
      `}>
      <Text typographyType={'t8'} color={colors.white}>
        {tag}
      </Text>
    </div>
  );
}

export default TagList;
