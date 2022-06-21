import styled from "styled-components";
import Picture from "./Picture";
import Personal from "./Personal";
import Achievements from "./Achievements";
import Contact from "./Contact";

export default function Sidebar({ cv, onInfoChange }) {
  return (
    <Container>
      <Wrapper>
        <Picture />
        <Personal cv={cv} onInfoChange={onInfoChange} />
        <Achievements cv={cv} onInfoChange={onInfoChange} />
        <Contact cv={cv} onInfoChange={onInfoChange} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e1d9d1;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  /* background-color: teal; */

  /* display: grid;
  grid-template-rows: 1.5fr 1fr 1fr 1fr; */
`;

const Wrapper = styled.div`
  margin: 3em 2em;

  display: grid;
  grid-template-rows: 1.3fr 1fr 1fr 1fr;
  gap: 2em;
  /* background-color: yellow; */
`;

// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
