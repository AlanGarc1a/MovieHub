import React from "react";
import { SubHeading } from "./Text.styles";

const Text: React.FC = ({ children }) => {
  return (
    <>
      <SubHeading>{children}</SubHeading>
    </>
  );
};

export default Text;
