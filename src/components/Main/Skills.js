import styled from "styled-components";
import React from "react";

export default function Skills({ cv, onInfoChange }) {
  const [display, setDisplay] = React.useState("notdisplayed");
  const [showForm, setShowForm] = React.useState(false);

  const { skillDesc } = cv.skills;

  const showButton = (e) => {
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    setDisplay("notdisplayed");
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Container
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <Title>SKILLS</Title>
      <Button className={display} onClick={toggleForm}>
        Edit
      </Button>
      {showForm && (
        <Form>
          <TextArea
            name="skillDesc"
            value={skillDesc}
            onChange={onInfoChange}
            maxLength="150"
            placeholder="Skills"
          />
          <EditButton type="button" onClick={toggleForm}>
            Close Edit
          </EditButton>
        </Form>
      )}
      <Desc>
        {skillDesc
          ? skillDesc
          : "Built single page applications (SPA), responsive web design, UI using HTML5 grid layouts, CSS3 media queries where it’s an expression and can be used to either true or false."}
      </Desc>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.4em 2em;
  font-weight: 900;
  border: none;
  background-color: #7f5a58;
  color: white;
  border-radius: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  margin-bottom: 8px;
`;

const EditButton = styled.button`
  cursor: pointer;
`;

const Title = styled.h3`
  background-color: #7f5a58;
  color: white;
  padding: 10px 20px;
  white-space: nowrap;
  width: 100%;
  text-align: center;
`;

const Desc = styled.div`
  padding: 10px 20px;
  margin-top: 20px;
`;
