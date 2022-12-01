import styled from "styled-components";
import scene11 from "../assets/scene11.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene12 from "./Scene12";
import Fail from "./Fail";

export default function Scene11() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene11} />
        </ImagePart>
        <StoryPart>
          <BtnPart>
            <Button onClick={() => setViewFail(true)}>
              <Title1>A : 일반 쓰레기에 버려요</Title1>
            </Button>
            <Button onClick={() => setViewNext(true)}>
              <Title1>B : 종이류에 버려요</Title1>
            </Button>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  }
  if (viewFail && !viewNext) {
    return <Fail />;
  }
  if (viewNext && !viewFail) {
    return <Scene12 />;
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
  width: 30rem;
  height: 5rem;
  font-size: 1rem;
`;
