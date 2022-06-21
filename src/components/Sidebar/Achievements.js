import styled from "styled-components";
import React from "react";

export default function Achievements({ cv, onInfoChange }) {
  const [display, setDisplay] = React.useState("notdisplayed");
  const [showForm, setShowForm] = React.useState(false);

  const showButton = (e) => {
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    setDisplay("notdisplayed");
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const { myAchieve } = cv.achievements;

  return (
    <Container
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <Title>ACHIEVEMENTS</Title>
      <Button className={display} onClick={toggleForm}>
        Edit
      </Button>
      {showForm && (
        <Form>
          <TextArea
            name="myAchieve"
            value={myAchieve}
            onChange={onInfoChange}
            maxLength="150"
            placeholder="My Achievements"
          />
          <EditButton type="button" onClick={toggleForm}>
            Close Edit
          </EditButton>
        </Form>
      )}
      <Desc>
        {myAchieve
          ? myAchieve
          : "Delivered responsive, cross-browser compatible and accessibility compliant websites, achieving 19% faster load time than industry average."}
      </Desc>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: teal; */
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  background-color: #7f5a58;
  color: white;
  padding: 10px 20px;
  white-space: nowrap;
  width: 100%;
  text-align: center;
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
  /* margin-right: 20px; */
  margin-bottom: -20px;
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

const Desc = styled.div`
  /* text-align: center; */
  padding: 10px 20px;
`;
