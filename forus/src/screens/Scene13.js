import styled from "styled-components";
import logo from "../assets/character.PNG";
import React, { useState } from "react";
import Scene14 from "./Scene14";
import { Title1 } from "../fonts/text";

export default function Scene13() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={logo} />
        </ImagePart>
        <StoryPart>
          <Title1>
            네모는 분리수거를 하고 나니,
            <br />
            다시 배가 고파졌습니다.
            <br />
            식당에 가서 점심을 먹으려고 합니다!
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
    return <Scene14 />;
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
  weight: 20rem;
  height: 3rem;
  font-size: 1rem;
  background-color: lightblue;
`;
