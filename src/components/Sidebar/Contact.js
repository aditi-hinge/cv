import styled from "styled-components";
import React from "react";

export default function Contact({ cv, onInfoChange }) {
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

  const { phone, email, website, linkedIn } = cv.contact;

  return (
    <Container
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <Title>GET IN TOUCH WITH ME</Title>
      <Button className={display} onClick={toggleForm}>
        Edit
      </Button>
      {showForm && (
        <Form>
          <Input
            name="phone"
            value={phone}
            onChange={onInfoChange}
            maxLength="10"
            placeholder="Phone"
            type="text"
          />
          <Input
            name="email"
            value={email}
            onChange={onInfoChange}
            maxLength="15"
            placeholder="Email"
            type="email"
          />
          <Input
            name="website"
            value={website}
            onChange={onInfoChange}
            maxLength="15"
            placeholder="Website"
            type="text"
          />
          <Input
            name="linkedIn"
            value={linkedIn}
            onChange={onInfoChange}
            maxLength="15"
            placeholder="LinkedIn"
            type="text"
          />
          <EditButton type="button" onClick={toggleForm}>
            Close Edit
          </EditButton>
        </Form>
      )}
      <Desc>
        <Phone>Phone: {phone ? phone : "555-555-555"}</Phone>
        <Email>Email: {email ? email : "apple@gmail.com"}</Email>
        <Website>Website: {website ? website : "apple.com"}</Website>
        <Linkedin>
          LinkedIn: {linkedIn ? linkedIn : "apple/linkedin.com"}
        </Linkedin>
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

const Input = styled.input`
  margin-bottom: 8px;
`;

const EditButton = styled.button`
  cursor: pointer;
`;

const Desc = styled.div`
  /* text-align: center; */
  padding: 10px 20px;
`;

const Phone = styled.div`
  margin-bottom: 5px;
`;

const Email = styled.div`
  margin-bottom: 5px;
`;

const Website = styled.div`
  margin-bottom: 5px;
`;

const Linkedin = styled.div`
  margin-bottom: 5px;
`;
