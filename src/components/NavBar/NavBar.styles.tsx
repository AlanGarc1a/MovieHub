import styled from "styled-components";

export const NavContainer = styled.aside`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    border-right: .1rem solid var(--secondary);
    width: 12%;
    height: 100%;
    overflow-x: hidden;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    padding-top: 5rem;
    height: 100%;
`;

export const NavTitle = styled.h1`
    color: var(--grey);
    font-size: 2.8rem;
    margin-bottom: 4rem;
`;

export const NavItem = styled.div`
    margin-bottom: 4rem;
`;

export const NavLink = styled.a`
    display: inline-block;
    width: 100%;
    font-size: 1.8rem;
    color: var(--grey);
    cursor: pointer;
`;