import styled from "styled-components";
import scene22 from "../assets/scene22.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene17 from "./Scene17";
import Fail2 from "./Fail2";
import Success from "./Sucess";

export default function Scene18() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene22} />
        </ImagePart>
        <StoryPart>
          <Title1>친구와 옷을 사러 간 네모!</Title1>
          <BtnPart>
            <Button onClick={() => setViewFail(true)}>
              <Title1>A : 새 옷을 장만하겠어요!</Title1>
            </Button>
            <Button2 onClick={() => setViewNext(true)}>
              <Title1>B : 빈티지 샵을 가볼까?</Title1>
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
    return <Success />;
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
  background-color: orange;
`;

const Button2 = styled.button`
  width: 350px;
  height: 5rem;
  font-size: 1rem;
  background-color: lightgreen;
`;
