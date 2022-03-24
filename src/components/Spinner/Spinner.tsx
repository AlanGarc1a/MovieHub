import React from "react";
import { LoadingSpinner, SpinnerContent, SpinnerBox } from "./SpinnerStyles";

const Spinner: React.FC = () => {
  return (
    <SpinnerContent>
      <SpinnerBox>
        <LoadingSpinner />
      </SpinnerBox>
    </SpinnerContent>
  );
};

export default Spinner;
