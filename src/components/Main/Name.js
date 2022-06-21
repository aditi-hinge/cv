import styled from "styled-components";
import React from "react";

export default function Name({ cv, onInfoChange }) {
  const [display, setDisplay] = React.useState("notdisplayed");
  const [showForm, setShowForm] = React.useState(false);
  // const [FormData, setFormData] = React.useState(cv);

  const showButton = (e) => {
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    setDisplay("notdisplayed");
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const { fullname, title } = cv.personalInfo;
  // console.log(onInfoChange.handleChange);
  // const closeForm = () => {
  //   setShowForm(!sho)
  // }

  return (
    <Container
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <Button className={display} onClick={toggleForm}>
        Edit
      </Button>
      {showForm && (
        <Form>
          <Input
            placeholder="Full Name"
            type="text"
            name="fullname"
            maxLength="40"
            value={fullname}
            onChange={onInfoChange}
          />
          <Input
            placeholder="Title"
            type="text"
            name="title"
            maxLength="50"
            value={title}
            onChange={onInfoChange}
          />
          <EditButton type="button" onClick={toggleForm}>
            Close Edit
          </EditButton>
        </Form>
      )}
      <FullName>{fullname ? fullname : "LIZA HOPPER"}</FullName>
      <Title>{title ? title : "Web Developer"}</Title>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: #7f5a58;
  color: white;
  /* background-color: teal; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  padding: 0.4em 2em;
  font-weight: 900;
  border: none;
  background-color: whitesmoke;
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  /* display: none; */
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  /* margin-right: 0; */
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  /* margin-bottom: 5px; */
`;

const Input = styled.input`
  margin-bottom: 8px;
`;

const EditButton = styled.button`
  cursor: pointer;
`;

const FullName = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 3em;
  margin-top: 1em;
`;

const Title = styled.div`
  margin: 10px 0;
  text-align: center;
`;
