import styled from "styled-components";
import scene10 from "../assets/scene10.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene11 from "./Scene11";
import Fail from "./Fail";

export default function Scene10() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene10} />
        </ImagePart>
        <StoryPart>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>
              <Title1>A : 일반 쓰레기에 버려요</Title1>
            </Button>
            <Button2 onClick={() => setViewFail(true)}>
              <Title1>B : 플라스틱에 버려요</Title1>
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
    return <Scene11 />;
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
  height: 5rem;
  font-size: 1rem;
  background-color: lightyellow;
`;

const Button2 = styled.button`
  width: 350px;
  height: 5rem;
  font-size: 1rem;
  background-color: lightgreen;
`;
