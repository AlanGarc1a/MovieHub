import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 2rem;
  border: none;
  border-bottom: 0.1rem solid var(--white);
  background: transparent;
  width: 100%;
  caret-color: var(--white);

  &::placeholder {
    color: var(--light-grey);
    font-weight: 100;
    font-size: 2.8rem;
  }
  &:focus {
    outline: none;
  }

  &[type="text"] {
    font-size: 2.5rem;
    color: var(--white);
  }
`;
