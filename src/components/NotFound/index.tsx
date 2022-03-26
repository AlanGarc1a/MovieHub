import React from "react";
import Container from "../Container/Container";
import {
  Heading,
  SubHeading,
  HeadingContent,
  HeadingContainer,
} from "./NotFound.styles";

const index: React.FC = () => {
  return (
    <Container>
      <HeadingContainer>
        <HeadingContent>
          <Heading>404</Heading>
        </HeadingContent>
        <HeadingContent>
          <SubHeading>Page Not Found</SubHeading>
        </HeadingContent>
      </HeadingContainer>
    </Container>
  );
};

export default index;
