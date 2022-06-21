import styled from "styled-components";
import WomanImg from "../Image/cv-image.PNG";
import React from "react";

export default function Sidebar() {
  const [display, setDisplay] = React.useState("notdisplayed");
  const [img, setImg] = React.useState(WomanImg);

  // to make a button open up folder instead of input
  const inputFile = React.useRef(null);

  // function to set image selected from the folder
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const showButton = (e) => {
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    setDisplay("notdisplayed");
  };

  const openFileSelector = () => {
    inputFile.current.click();
  };

  return (
    <Container
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <Button className={display} onClick={openFileSelector}>
        Edit
      </Button>
      <Input type="file" id="file" ref={inputFile} onChange={onImageChange} />

      <ImgContainer>
        <Image src={img} alt="woman smiling" />
      </ImgContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
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
`;

const ImgContainer = styled.div`
  height: 13em;
  width: 13em;
  background: no-repeat center;
  background-size: cover;
  cursor: pointer;
`;
const Input = styled.input`
  display: none;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
