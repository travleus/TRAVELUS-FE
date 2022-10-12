import styled from '@emotion/styled';
import { ReactNode } from 'react';
import colors from '@constants/colors';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: auto;
  background-color: ${colors.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  min-height: 100vh;
  background-color: white;
`;

export default AppLayout;
