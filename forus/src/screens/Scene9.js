import styled from "styled-components";
import scene9 from "../assets/scene9.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene10 from "./Scene10";
import Fail2 from "./Fail2";

export default function Scene9() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene9} />
        </ImagePart>
        <StoryPart>
          <BtnPart>
            <Button onClick={() => setViewFail(true)}>
              <Title1>A : 일반 쓰레기에 버려요</Title1>
            </Button>
            <Button2 onClick={() => setViewNext(true)}>
              <Title1>B : 플라스틱에 버려요</Title1>
            </Button2>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  }
  if (viewFail && !viewNext) {
    return <Fail2 />;
  }
  if (viewNext && !viewFail) {
    return <Scene10 />;
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
  background-color: lightpink;
`;
