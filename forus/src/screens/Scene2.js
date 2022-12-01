import styled from "styled-components";
import scene2 from "../assets/scene2.PNG";
import React, { useState } from "react";
import Scene3 from "./Scene3";
import { Title1 } from "../fonts/text";

function Scene2() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene2} />
        </ImagePart>
        <StoryPart>
          <Title1>
            평화로운 주말 오전..
            <br />
            네모는 느지막히 일어나
            <br />
            하루를 시작하려고 합니다.
            <br /> 우선 아침을 먹어볼까요?
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
    return <Scene3 />;
  }
}

export default Scene2;

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
  background-color: lightblue;
`;
