import React from "react";
import {
  Nav,
  NavItem,
  NavContainer,
  NavTitle,
  BorderLeft,
} from "./SideBar.styles";
import { NavLink } from "react-router-dom";

interface Links {
  title: string;
  url: string;
}

export const NavLinks: Links[] = [
  { title: "Browse", url: "/" },
  { title: "Upcoming Movies", url: "/upcoming-movies" },
  { title: "Popular Movies", url: "/popular-movies" },
  { title: "Popular Shows", url: "/top-tv-shows" },
  { title: "Search for Movie", url: "/movie/search" },
  { title: "Search for Show", url: "/show/search" },
];

const SideBar: React.FC = () => {
  const renderNavItems = () => {
    return NavLinks.map((item: Links, index) => {
      return (
        <NavItem key={index}>
          <NavLink
            to={item.url}
            style={({ isActive }) => {
              return {
                display: "inline-block",
                width: "100%",
                color: isActive ? "#23cf68" : "#AFBABA",
                textDecoration: "none",
              };
            }}
          >
            {item.title}
          </NavLink>
        </NavItem>
      );
    });
  };
  return (
    <>
      <NavContainer>
        <BorderLeft></BorderLeft>
        <Nav>
          <NavItem>
            <NavTitle>MovieHub</NavTitle>
          </NavItem>
          {renderNavItems()}
        </Nav>
      </NavContainer>
    </>
  );
};

export default SideBar;
