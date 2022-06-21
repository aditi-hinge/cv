import styled from "styled-components";
import React from "react";

export default function Name({ cv, onInfoChange }) {
  const [display, setDisplay] = React.useState("notdisplayed");
  const [showForm, setShowForm] = React.useState(false);

  const { university, degree, desc } = cv.education;

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
      <Title>EDUCATION</Title>
      <Button className={display} onClick={toggleForm}>
        Edit
      </Button>
      <Desc>
        {showForm && (
          <Form>
            <Input
              placeholder="Name of University"
              type="text"
              name="university"
              maxLength="30"
              value={university}
              onChange={onInfoChange}
            />
            <Input
              placeholder="Degree"
              type="text"
              name="degree"
              maxLength="50"
              value={degree}
              onChange={onInfoChange}
            />
            <TextArea
              name="desc"
              value={desc}
              onChange={onInfoChange}
              maxLength="150"
              placeholder="Education Description"
            />
            <EditButton type="button" onClick={toggleForm}>
              Close Edit
            </EditButton>
          </Form>
        )}
        <UniName>{university ? university : "University of Lihua"}</UniName>
        <Degree>
          {degree ? degree : "Bachelor of Arts in Bussiness Communication"}
        </Degree>
        <EduDesc>
          {desc
            ? desc
            : "Academic Honors: Boston University's Metropolitan College Program Achievement Citation (2020), Dean’s List (3 semesters)"}
        </EduDesc>
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
  margin-bottom: -20px;
  margin-right: 20px;
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
  right: 0;
  padding: 10px;
  border-radius: 10px;
`;

const Input = styled.input`
  margin-bottom: 8px;
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
`;

const UniName = styled.div`
  margin: 10px 0;
  font-weight: 600;
`;

const Degree = styled.div`
  margin: 10px 0;
  font-size: 0.8rem;
  font-style: italic;
`;

const EduDesc = styled.div``;
