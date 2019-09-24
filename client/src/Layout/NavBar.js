import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import './layout.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Container fluid>
          <div className="navbar-wrapper">
            <NavbarBrand href="/">Philly Elder Helpers</NavbarBrand>
          </div>
            <Nav navbar>
              <UncontrolledDropdown group>
                <DropdownToggle caret nav>
                  <i className="nc-icon nc-settings-gear-65" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Login</DropdownItem>
                  <DropdownItem tag="a">Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
