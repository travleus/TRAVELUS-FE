import styled from '@emotion/styled';
import AppLogo from '@components/AppLogo';

function Header() {
  return (
    <HeaderContainer>
      <AppLogo />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  padding: 10px 30px 0;
`;

export default Header;
