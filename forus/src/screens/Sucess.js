import styled from "styled-components";
import logo from "../assets/logo.png";
import { Title1 } from "../fonts/text";

export default function Sucess() {
  return (
    <Container>
      <ImagePart>
        <LogoImg src={logo} />
      </ImagePart>
      <StoryPart>
        <Title1>
          지금까지 지구레인저였습니다. <br />
          관심을 가지고 참여해 주셔서 고맙습니다.
          <br />
          지금부터 환경을 아껴주시고 많이 사랑해주세요! <br />
        </Title1>
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
