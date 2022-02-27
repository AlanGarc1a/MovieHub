import React from "react";
import {
  LoadingSpinner,
  SpinnerTitle,
  SpinnerContent,
  SpinnerBox,
} from "./SpinnerStyles";

const Spinner: React.FC = () => {
  return (
    <SpinnerContent>
      <SpinnerBox>
        <SpinnerTitle>Loading...</SpinnerTitle>
        <LoadingSpinner />
      </SpinnerBox>
    </SpinnerContent>
  );
};

export default Spinner;
