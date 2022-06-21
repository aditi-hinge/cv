import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

export default function Resume() {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 80vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin: 1em 0;
  justify-content: center;
  align-items: center;
`;
