import styled from "styled-components";
import scene5 from "../assets/scene5.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene6 from "./Scene6";
import Fail2 from "./Fail2";

export default function Scene5() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene5} />
        </ImagePart>
        <StoryPart>
          <Title1>깨끗하게 샤워를 하는 네모!</Title1>
          <BtnPart>
            <Button onClick={() => setViewFail(true)}>
              <Title1>
                A : 느긋하게 오랫동안 샤워를 하면
                <br /> 기분이 좋을 것 같아요!
              </Title1>
            </Button>
            <Button onClick={() => setViewNext(true)}>
              <Title1>B : 간단히 짧게 샤워하고 나갈래요!</Title1>
            </Button>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  }
  if (viewFail && !viewNext) {
    return <Fail2 />;
  }
  if (viewNext && !viewFail) {
    return <Scene6 />;
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
