import { NextPage } from 'next';
import { Container, MainContainer } from '@components/Container';
import Footer from '@components/Footer';
import Text from '@components/Text';
import { ReactNode, useEffect, useState } from 'react';
import colors from '@constants/colors';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const Menu: NextPage = () => {
  const router = useRouter();
  const [kakao, setKakao] = useState<string | null>();

  useEffect(() => {
    setKakao(window.localStorage.getItem('kakao'));
  }, [setKakao]);

  const onLogin = () => {
    router.push('/login');
  };

  const onLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      window.localStorage.clear();
      router.reload();
    }
  };

  return (
    <Container>
      <MainContainer>
        <>
          <Text typographyType={'t4'} fontWeight={700}>
            계정
          </Text>
          <Item
            src={'/icons/kakao.png'}
            left={kakao ? kakao : '로그인'}
            right={
              kakao ? (
                <Text
                  css={css`
                    cursor: pointer;
                  `}
                  typographyType={'t7'}
                  color={colors.text4}
                  fontWeight={500}>
                  로그아웃
                </Text>
              ) : (
                <></>
              )
            }
            onClick={kakao ? onLogout : onLogin}
          />
        </>
        <div
          css={css`
            padding-top: 60px;
          `}>
          <Text typographyType={'t4'} fontWeight={700}>
            메뉴
          </Text>
          <Item src={'/icons/plan_primary.png'} left={'내 여행계획'} onClick={() => router.push('/menu/plan')} />
          <Item src={'/icons/heart_active.png'} left={'찜 장소'} onClick={() => router.push('/menu/like')} />
        </div>
      </MainContainer>
      <Footer />
    </Container>
  );
};

interface ItemProps {
  src: string;
  left: string;
  right?: ReactNode;
  onClick?: () => void;
}

function Item({ src, left, right, onClick }: ItemProps) {
  return (
    <div
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 40px;
        margin-top: 15px;

        &:hover {
          background-color: ${colors.background};
          border-radius: 5px;
          padding: 5px;
        }
      `}>
      <img
        css={css`
          margin-right: 15px;
        `}
        width={25}
        height={25}
        src={src}
        alt={'left_icon'}
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
        `}>
        <Text
          css={css`
            cursor: pointer;
          `}
          typographyType={'t5'}
          color={colors.text2}
          fontWeight={500}>
          {left}
        </Text>
        {right}
      </div>
    </div>
  );
}

export default Menu;
