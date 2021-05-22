import { Nav } from "./Navbar.styles";
import NavItems from "./NavItems/NavItems";

const Navbar = () => {
  return (
    <Nav>
      <h1 className="logo">Meetups</h1>
      <div className="nav--menu">
        <NavItems />
      </div>
    </Nav>
  );
};

export default Navbar;
