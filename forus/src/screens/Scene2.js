import styled from "styled-components";
import scene2 from "../assets/scene2.PNG";
import React, { useState } from "react";
import { Button } from "antd";
import Scene3 from "./Scene3";

function Scene2() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene2} />
        </ImagePart>
        <StoryPart>
          평화로운 주말 오전...
          <br />
          네모는 느지막히 일어나 하루를 시작하려고 합니다.
          <br /> 우선 아침을 먹어볼까요?
        </StoryPart>
        <div className="mainButtonWrapper">
          <Button onClick={() => setViewNext(true)}>Next</Button>
        </div>
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
  height: 20%;
`;
