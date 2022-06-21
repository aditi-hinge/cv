import styled from "styled-components";
import Name from "./Name";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Skills from "./Skills";

export default function Main({ cv, onInfoChange }) {
  // console.log(onDisplay);
  return (
    <Container>
      <Wrapper>
        <Name cv={cv} onInfoChange={onInfoChange} />
        <WorkExp cv={cv} onInfoChange={onInfoChange} />
        <Education cv={cv} onInfoChange={onInfoChange} />
        <Skills cv={cv} onInfoChange={onInfoChange} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: #fffaf0; */
  background-color: #7f5a58;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Wrapper = styled.div`
  margin: 0 2em;
  background-color: whitesmoke;
  display: grid;
  grid-template-rows: 0.8fr 1fr 1fr 1fr;
  gap: 2em;
`;
// const Name = styled.div``;
// const Title = styled.div``;
// const WorkExp = styled.div``;
// const Education = styled.div``;
// const Skills = styled.div``;
//background-color: #7F5A58;
