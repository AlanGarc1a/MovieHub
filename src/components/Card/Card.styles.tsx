import styled from "styled-components";

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: all 0.2s ease-out;

  &:hover {
    transition: all 0.2s ease-in;
    opacity: 1;
  }
`;

export const MovieBox = styled.div`
  width: 22rem;
  position: relative;
  cursor: pointer;

  &:hover ${MovieImage} {
    opacity: 0.4;
  }
`;

export const MovieImageBox = styled.div`
  width: 100%;
  height: 30rem;
  box-shadow: 0.9rem 0.9rem 1.2rem var(--black);
  margin-bottom: 1.5rem;
`;

export const MovieRatingBox = styled.div`
  position: absolute;
  top: 3%;
  left: 79%;
  background: var(--light-green);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const MovieTitle = styled.span`
  display: inline-block;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 400;
`;
