import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  z-index: 99;
  border-bottom: 0.1rem solid var(--white);

  @media only screen and (max-width: 768px) {
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: var(--secondary);
`;

export const MenuItem = styled.div`
  color: var(--white);
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const MenuContent = styled.div`
  background-color: var(--primary);
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1.2rem 2.5rem;
  margin-right: 2rem;
  cursor: pointer;
`;

export const MenuListContent = styled.div`
  position: absolute;
  right: 29%;
  z-index: 99;
  width: 35%;
  margin-top: 1rem;
  text-align: center;
  border-radius: 0.2rem;
  background-color: var(--white);
`;

export const MenuList = styled.ul`
  list-style-type: none;
  width: 100%;
`;

export const MenuListItem = styled.li`
  font-size: 2rem;
  width: 100%;
  padding: 0.5rem;
  text-transform: uppercase;

  &:hover {
    background-color: var(--light-grey);
  }
`;

export const MenuListLink = styled(Link)`
  display: inline-block;
  color: var(--primary);
  text-decoration: none;
  width: 100%;
`;

export const MenuChevron = styled(FiChevronDown)`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const MenuSearch = styled(BsSearch)`
  font-size: 2.2rem;
  color: var(--white);
`;

export const MenuHome = styled.span`
  color: var(--white);
  text-decoration: none;
`;
