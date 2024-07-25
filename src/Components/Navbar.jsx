import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <div>
      <Navbar color="secondary" fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
          Website Name
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={open} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/home">
                Home
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
