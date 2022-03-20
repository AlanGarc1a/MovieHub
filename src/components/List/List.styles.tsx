import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style-type: none;
  margin-top: 5rem;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 1.5rem;

  &:hover {
    background-color: var(--light-grey);
  }
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;

export const ListContent = styled.div`
  display: flex;
`;

export const ListContentDetail = styled.div`
  width: 15rem;
  height: 10rem;
  margin-right: 1.5rem;
`;

export const ListContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const ListContentTitle = styled.span`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--white);
  align-self: center;
`;
