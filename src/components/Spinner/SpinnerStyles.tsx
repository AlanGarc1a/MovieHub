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

export const SpinnerTitle = styled.h3`
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.4rem;
  margin-bottom: 5rem;
  color: var(--white);
`;

export const LoadingSpinner = styled.div`
  border: 1.6rem solid var(--grey);
  border-radius: 50%;
  border-top: 1.6rem solid var(--light-grey);
  animation: ${rotate} 2s linear infinite;
  width: 15rem;
  height: 15rem;
  margin: 0.3rem auto;
`;
