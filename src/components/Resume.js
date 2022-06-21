import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import EmptyCV from "./EmptyCV";
import React from "react";
import "../styles.css";

export default function Resume() {
  const [cv, setCv] = React.useState(EmptyCV);

  function handleChange(e) {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value
      },
      workInfo: {
        ...prevState.workInfo,
        [name]: value
      },
      education: {
        ...prevState.education,
        [name]: value
      },
      skills: {
        ...prevState.skillDesc,
        [name]: value
      },
      aboutMe: {
        ...prevState.myDesc,
        [name]: value
      },
      achievements: {
        ...prevState.achievements,
        [name]: value
      },
      contact: {
        ...prevState.contact,
        [name]: value
      }
    }));
  }

  // console.log(display);
  return (
    <Container>
      <Sidebar cv={cv} onInfoChange={handleChange} />
      <Main cv={cv} onInfoChange={handleChange} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 80vh;
  display: grid;
  grid-template-columns: 2.5fr 3fr;
  margin: 1em 0;
  justify-content: center;
  align-items: center;
`;
