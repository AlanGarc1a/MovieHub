import styled from "styled-components";

export const NavContainer = styled.aside`
  position: fixed;
  left: 0;
  width: 10%;
  height: 100%;
  overflow: hidden;
  background-color: var(--grey);
  z-index: 99;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:before {
    content: "";
    position: absolute;
    left: 99%;
    top: 0;
    height: 15rem;
    width: 50%;
    border-left: 0.1rem solid var(--light-grey);
  }
`;

export const BorderLeft = styled.div``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 3.5rem;
  padding-top: 5rem;
  height: 100%;
`;

export const NavTitle = styled.h1`
  color: var(--white);
  font-size: 2.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

export const NavItem = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 4rem;
`;
