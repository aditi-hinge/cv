import "./styles.css";
import Resume from "./components/Resume";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Resume />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
