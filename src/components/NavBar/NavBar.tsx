import React from "react";
import {
  Menu,
  MenuItem,
  MenuContainer,
  MenuSearch,
  MenuContent,
  MenuChevron,
  MenuListContent,
  MenuList,
  MenuListItem,
  MenuListLink,
  MenuHome,
} from "./Navbar.styles";
import { NavLinks } from "../Sidebar";
import { INavBarProps } from "../../models/navbarProps";
import { Link } from "react-router-dom";

const NavBar: React.FC<INavBarProps> = ({
  open,
  handleMenuClick,
}: INavBarProps) => {
  const renderMenuList = () => {
    return NavLinks.map((link, index) => {
      return (
        <MenuListItem key={index}>
          <MenuListLink to={link.url} onClick={handleMenuClick}>
            {link.title}
          </MenuListLink>
        </MenuListItem>
      );
    });
  };

  return (
    <>
      <MenuContainer>
        <Menu>
          <MenuItem>
            <Link to="/">
              <MenuHome>MovieHub</MenuHome>
            </Link>
          </MenuItem>
          <MenuItem>
            <MenuContent onClick={handleMenuClick}>
              Menu
              <MenuChevron />
            </MenuContent>
            {open ? (
              <></>
            ) : (
              <MenuListContent>
                <MenuList>{renderMenuList()}</MenuList>
              </MenuListContent>
            )}
          </MenuItem>
          <MenuItem>
            <Link to="/movie/search">
              <MenuSearch />
            </Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </>
  );
};

export default NavBar;
