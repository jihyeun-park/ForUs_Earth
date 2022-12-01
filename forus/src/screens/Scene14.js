import styled from "styled-components";
import scene14 from "../assets/scene14.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene15 from "./Scene15";
import Fail from "./Fail";

export default function Scene14() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene14} />
        </ImagePart>
        <StoryPart>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>
              <Title1>A : 먹고 갈까요?</Title1>
            </Button>
            <Button2 onClick={() => setViewFail(true)}>
              <Title1>B : 포장할까요?</Title1>
            </Button2>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  }
  if (viewFail && !viewNext) {
    return <Fail />;
  }
  if (viewNext && !viewFail) {
    return <Scene15 />;
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
  background-color: lightblue;
`;

const Button2 = styled.button`
  width: 30rem;
  height: 5rem;
  font-size: 1rem;
  background-color: lightgreen;
`;
