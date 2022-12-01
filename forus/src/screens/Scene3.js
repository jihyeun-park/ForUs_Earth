import styled from "styled-components";
import scene3 from "../assets/scene3.PNG";
import React, { useState } from "react";
import { Button } from "antd";
import { Title1 } from "../fonts/text";
import Scene4 from "./Scene4";
import Fail from "./Fail";

function Scene3() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene3} />
        </ImagePart>
        <StoryPart>
          <Title1>
            평화로운 주말 오전...
            <br />
            네모는 느지막히 일어나 하루를 시작하려고 합니다.
            <br /> 우선 아침을 먹어볼까요?
          </Title1>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>1번</Button>
            <Button onClick={() => setViewFail(true)}>2번</Button>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  }
  if (viewFail && !viewNext) {
    return <Fail />;
  }
  if (viewNext && !viewFail) {
    return <Scene4 />;
  }
}

export default Scene3;

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

const BtnPart = styled.div`
  margin-top: 30px;
`;

const Btn = styled.button`
  weight: 100px;
`;
