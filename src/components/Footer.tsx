import { css } from '@emotion/react';
import Text from '@components/Text';
import { useRouter } from 'next/router';
import colors from '@constants/colors';
import styled from '@emotion/styled';
import { Hash } from '@utils/types';

function Footer() {
  return (
    <Container>
      <FooterBox>
        <NavLink href={'/'} />
        <NavLink href={'/plan'} />
        <NavLink href={'/menu'} />
      </FooterBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 768px;
`;

interface NavLinkProps {
  href: string;
}

const routeHash: Hash<string> = {
  '/': '홈',
  '/plan': '계획',
  '/menu': '메뉴',
};

function NavLink({ href }: NavLinkProps) {
  const router = useRouter();
  const isCurrentPage = href === '/' + router.asPath.split('/')[1];

  return (
    <NavContainer onClick={() => router.push(href)}>
      <img
        width={20}
        height={20}
        src={isCurrentPage ? `/icons${href}_active.png` : `/icons${href}.png`}
        alt={`${href}_icon`}
      />
      <Text
        css={css`
          margin-top: 4px;
          cursor: pointer;
        `}
        typographyType={'t7'}
        color={isCurrentPage ? colors.text1 : colors.text4}>
        {routeHash[href]}
      </Text>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
`;

export default Footer;
