import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 6rem;

  @media screen and (max-width: 768px) {
    max-width: 76.8rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 48rem;
  }
`;

export const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
