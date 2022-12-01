import styled from "styled-components";
import logo from "../assets/character.PNG";
import React, { useState } from "react";
import Scene5 from "./Scene5";
import { Title1 } from "../fonts/text";

export default function Scene4() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={logo} />
        </ImagePart>
        <StoryPart>
          <Title1>
            네모는 배부르게 식사를 한 다음,
            <br />
            기분이 좋아져 샤워를 하려고 합니다!
            <br />
            깨끗하게 샤워를 해볼까요?
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
    return <Scene5 />;
  }
}

const Container = styled.div`
  weight: 320px;
  height: 1024px;
`;

const ImagePart = styled.div`
  weight: 750px;
  height: 35%;
`;

const LogoImg = styled.img`
  height: 350px;
  width: 350px;
`;

const StoryPart = styled.div`
  margin-top: 50px;
  height: 20%;
`;

const BtnPart = styled.div`
  margin-top: 30px;
`;

const Button = styled.button`
  width: 350px;
  height: 3rem;
  font-size: 1rem;
  background-color: lightblue;
`;
