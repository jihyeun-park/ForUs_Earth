import styled from "styled-components";
import scene6 from "../assets/scene6.PNG";
import React, { useState } from "react";
import Scene7 from "./Scene7";
import { Title1 } from "../fonts/text";

export default function Scene6() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene6} />
        </ImagePart>
        <StoryPart>
          <Title1>
            샤워를 마친 다음,
            <br />
            분리수거를 하러 나온 네모!
            <br />
            어떻게 분리수거를 할까요?
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
    return <Scene7 />;
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
