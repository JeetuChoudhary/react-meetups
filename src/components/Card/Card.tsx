import styled from "styled-components";

const Card: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default Card;

const Container = styled.div`
  width: 40rem;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.24);

  margin-bottom: 2rem;
`;
