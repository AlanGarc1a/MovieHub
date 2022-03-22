import styled from "styled-components";

interface IGridProps {
  direction?: string;
}

export const Grid = styled.div<IGridProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  flex-wrap: wrap;
  margin-top: 10rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`;

export const Col = styled.div`
  flex-basis: 100%;
`;
