import styled from "styled-components";
import bear from "../assets/bear.jpg";
import { Title1 } from "../fonts/text";

function Fail() {
  return (
    <Container>
      <ImagePart>
        <LogoImg src={bear} />
      </ImagePart>
      <StoryPart>
        <Title1>당신을 북극곰을 살해하였습니다</Title1>
      </StoryPart>
    </Container>
  );
}

export default Fail;

const Container = styled.div`
  weight: 320px;
  height: 1024px;
  background-color: gray;
`;

const ImagePart = styled.div`
  height: 50%;
`;

const LogoImg = styled.img`
  height: 500px;
  width: 500px;
`;

const StoryPart = styled.div`
  margin-top: 50px;
  height: 20%;
`;
