import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerContent = styled.div`
  position: relative;
`;

export const SpinnerBox = styled.div`
  position: absolute;
  left: 38%;
  margin-top: 10rem;
`;

export const LoadingSpinner = styled.div`
  border: 15rem solid var(--grey);
  border-radius: 50%;
  border-top: 0.5rem solid var(--light-grey);
  animation: ${rotate} 1s linear infinite;
  width: 15rem;
  height: 15rem;
  margin: 0.3rem auto;
`;
