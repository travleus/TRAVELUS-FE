import styled from '@emotion/styled';
import colors from '@constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`;

export const HeaderContainer = styled.div`
  padding: 10px 30px 0;

  @media screen and (max-width: 768px) {
    padding: 10px 10px 0;
  }
`;

export const ContentContainer = styled.div`
  padding: 10px 30px 15px;

  @media screen and (max-width: 768px) {
    padding: 10px 10px 15px;
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

export const Dot = styled.span<{ color: string }>`
  width: 7px;
  height: 7px;

  border: 1px solid white;
  border-radius: 100%;
  background-color: ${props => props.color};
`;

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.background};
`;
