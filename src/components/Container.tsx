import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const MainContainer = styled.div`
  padding-top: 30px;
`;

export const FlexRowCenterContainer = styled.div`
  display: flex;
  align-items: center;
`;
