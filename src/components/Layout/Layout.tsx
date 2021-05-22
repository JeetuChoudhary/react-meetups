import Navbar from "../Navbar/Navbar";
import { Container } from "./Layout.styles";

const Layout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{props.children}</main>
      </Container>
    </>
  );
};

export default Layout;
