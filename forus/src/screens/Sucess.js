import styled from "styled-components";
import bear from "../assets/bear.jpg";
import { Title1 } from "../fonts/text";

export default function Sucess() {
  return (
    <Container>
      <ImagePart>
        <LogoImg src={bear} />
      </ImagePart>
      <StoryPart>
        <Title1>당신을 북극곰을 지켰습니다!</Title1>
      </StoryPart>
    </Container>
  );
}

const Container = styled.div`
  weight: 320px;
  height: 1024px;
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
