import styled from "styled-components";
import scene7 from "../assets/scene7.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene8 from "./Scene8";
import Fail from "./Fail";

export default function Scene7() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene7} />
        </ImagePart>
        <StoryPart>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>
              <Title1>A : 일반 쓰레기에 버려요</Title1>
            </Button>
            <Button onClick={() => setViewFail(true)}>
              <Title1>B : 플라스틱에 버려요</Title1>
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
    return <Scene8 />;
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
