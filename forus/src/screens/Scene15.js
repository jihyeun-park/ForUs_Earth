import styled from "styled-components";
import logo from "../assets/character.PNG";
import React, { useState } from "react";
import Scene16 from "./Scene16";
import { Title1 } from "../fonts/text";

export default function Scene15() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={logo} />
        </ImagePart>
        <StoryPart>
          <Title1>
            밥을 먹고 나온 네모!
            <br />
            친구를 만나기로 했습니다.
            <br />
            그런데 약속 장소가 너무 멉니다..
          </Title1>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>
              <Title1>Next</Title1>
            </Button>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  } else {
    return <Scene16 />;
  }
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

const BtnPart = styled.div`
  margin-top: 30px;
`;

const Button = styled.button`
  weight: 20rem;
  height: 3rem;
  font-size: 1rem;
`;
