import React from "react";
import { 
    Nav, 
    NavTitle, 
    NavItem,
    NavLink,
    NavContainer 
} from "./NavBar.styles";

const NavBar: React.FC = () => {
    return (
        <NavContainer>
          <Nav>
              <NavTitle>MovieHub</NavTitle>
              <NavItem>
                <NavLink>Browse</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Top Genres</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>New Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>New TV Shows</NavLink>
              </NavItem>
          </Nav>  
        </NavContainer>
    )
}

export default NavBar;