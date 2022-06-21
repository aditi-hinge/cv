import styled from "styled-components";
// import "../../styles.css";
import React from "react";

export default function Name({ cv, onInfoChange }) {
  const [display, setDisplay] = React.useState("notdisplayed");
  const [showForm, setShowForm] = React.useState(false);
  // console.log(cv.workInfo);

  const { workTitle, companyName, workDesc, startDate, endDate } = cv.workInfo;

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
      <Title>WORK EXPERIENCE</Title>
      <Desc>
        <Button className={display} onClick={toggleForm}>
          Edit
        </Button>
        {showForm && (
          <Form>
            <Input
              placeholder="Work Title"
              type="text"
              name="workTitle"
              maxLength="40"
              value={workTitle}
              onChange={onInfoChange}
            />
            <Input
              placeholder="Company Name"
              type="text"
              name="companyName"
              maxLength="50"
              value={companyName}
              onChange={onInfoChange}
            />
            <Label htmlFor="startDate">Start Date:</Label>
            <Input
              type="date"
              name="startDate"
              value={startDate}
              onChange={onInfoChange}
            />
            <Label htmlFor="endDate">End Date:</Label>
            <Input
              type="date"
              name="endDate"
              value={endDate}
              onChange={onInfoChange}
            />
            <TextArea
              name="workDesc"
              value={workDesc}
              onChange={onInfoChange}
              maxLength="150"
              placeholder="Work Description"
            />
            <EditButton type="button" onClick={toggleForm}>
              Close Edit
            </EditButton>
          </Form>
        )}
        <WorkTitle>{workTitle ? workTitle : "Front End Developer"}</WorkTitle>
        <CompanyInfo>
          <Company>{companyName ? companyName : "MLK Media Inc."}</Company>|
          <Date>
            {startDate} - {endDate}
          </Date>
        </CompanyInfo>
        <WorkDesc>
          {workDesc
            ? workDesc
            : "Implemented websites, mobile applications, and landing pages from concept through deployment. Standardized all output with a new, responsive, mobile-first approach and strategy."}
        </WorkDesc>
      </Desc>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: teal; */
  height: 100%;
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

const Label = styled.label`
  font-size: 0.8rem;
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
  /* text-align: center; */
  padding: 10px 20px;
`;

const WorkTitle = styled.div`
  margin: 10px 0;
  font-weight: 600;
`;

const CompanyInfo = styled.div`
  display: flex;
  margin: 10px 0;
  font-size: 0.8rem;
  font-style: italic;
`;

const Company = styled.p`
  white-space: nowrap;
`;

const Date = styled.p`
  white-space: nowrap;
`;

const WorkDesc = styled.div``;
