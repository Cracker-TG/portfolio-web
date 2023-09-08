import styled, { keyframes } from "styled-components";

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 70px;
`;

const EllipsisDot = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const EllipsisDot1 = styled(EllipsisDot)`
  left: 8px;
  animation: ${ldsEllipsis1} 0.6s infinite;
`;

const EllipsisDot2 = styled(EllipsisDot)`
  left: 8px;
  animation: ${ldsEllipsis2} 0.6s infinite;
`;

const EllipsisDot3 = styled(EllipsisDot)`
  left: 32px;
  animation: ${ldsEllipsis2} 0.6s infinite;
`;

const EllipsisDot4 = styled(EllipsisDot)`
  left: 56px;
  animation: ${ldsEllipsis3} 0.6s infinite;
`;

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <EllipsisDot1 />
      <EllipsisDot2 />
      <EllipsisDot3 />
      <EllipsisDot4 />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
