import styled from '@emotion/styled';
import colors from '@constants/colors';

function Loading() {
  return (
    <LoadingWrapper>
      <LoadingAnimate />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const LoadingAnimate = styled.span`
  position: fixed;
  top: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid ${colors.primary2};
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
