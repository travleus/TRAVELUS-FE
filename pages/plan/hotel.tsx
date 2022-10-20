import { NextPage } from 'next';
import { useState } from 'react';
import { Region } from '@apis/region';
import { useFetchAllRegion } from '@hooks/queries';
import { Container, MainContainer, TopContainer } from '@components/Container';
import BackButton from '@components/BackButton';
import Text from '@components/Text';
import { css } from '@emotion/react';
import colors from '@constants/colors';
import Switch from '@components/Switch';
import Select from '@components/Select';
import Loading from '@components/Loading';
import { useRouter } from 'next/router';
import LazyImage from '@components/LazyImage';
import styled from '@emotion/styled';
import PlanProgress from '@components/PlanProgress';

const Hotel: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<Region | null>();
  const allRegion = useFetchAllRegion();

  const onClickItem = (region: Region) => {
    setRegion(region);
    setOpen(true);
  };

  return (
    <>
      {allRegion.data ? (
        <Container>
          <BackButton />
          <TopContainer>
            <Text typographyType={'t3'} fontWeight={700}>
              여행 루트 만들기
            </Text>
            <Text typographyType={'t3'} fontWeight={700}>
              2단계
            </Text>
            <Text
              css={css`
                text-decoration: underline ${colors.primary2} 1.5px;
              `}
              typographyType={'t6'}
              fontWeight={700}>
              호텔
            </Text>
          </TopContainer>
          <MainContainer>
            <PlanProgress />
            <div
              css={css`
                display: flex;
                margin-bottom: 20px;
              `}>
              <Text
                css={css`
                  letter-spacing: -0.5px;
                  height: 20px;
                  line-height: 20px;
                  margin-left: auto;
                  margin-right: 5px;
                `}
                typographyType={'t7'}>
                즐겨찾기
              </Text>
              <Switch />
            </div>
            {allRegion.data.map(region => (
              <CityItem key={region.id} region={region} onClick={() => onClickItem(region)} />
            ))}
          </MainContainer>
          {open && region && <Select place={region} onClose={() => setOpen(false)} />}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

interface Props {
  region: Region;
  onClick: () => void;
}

function CityItem({ region, onClick }: Props) {
  const router = useRouter();

  return (
    <Wrapper>
      <div
        onClick={() => router.push(`/city/${region.id}`)}
        css={css`
          display: flex;
          width: 100%;
          margin-right: 10px;
          cursor: pointer;
        `}>
        <LazyImage
          css={css`
            width: 80px;
            height: 80px;
            border-radius: 8px;
            filter: brightness(70%);
            margin-right: 15px;
            object-fit: cover;
          `}
          src={region.pictureUrl}
          alt={region.region}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}>
          <Text
            css={css`
              cursor: pointer;
            `}
            typographyType={'t6'}
            fontWeight={700}
            color={colors.text2}>
            {region.region}
          </Text>
          <Text
            css={css`
              cursor: pointer;
            `}
            typographyType={'t7'}
            fontWeight={600}
            color={colors.text4}>
            {region.useCount}회 선택됨
          </Text>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: auto;
          height: 80px;
        `}>
        <button
          onClick={onClick}
          css={css`
            width: 60px;
            height: 40px;
            background-color: #efefef;
            border-radius: 6px;
            font-size: 12px;

            &:hover {
              background-color: #dfdfdf;
            }
          `}>
          선택
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  margin-bottom: 15px;
`;

export default Hotel;
