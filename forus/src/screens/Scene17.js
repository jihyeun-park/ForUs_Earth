import styled from "styled-components";
import logo from "../assets/character.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene18 from "./Scene18";
import Scene19 from "./Scene19";
import Scene20 from "./Scene20";

export default function Scene17() {
  const [viewNext, setViewNext] = useState(false);
  const [viewNext2, setViewNext2] = useState(false);
  const [viewNext3, setViewNext3] = useState(false);

  if (!viewNext && !viewNext2 && !viewNext3) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={logo} />
        </ImagePart>
        <StoryPart>
          <Title1>친구와 만나 무엇을 하는 게 좋을까요?</Title1>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>
              <Title1>A : 쇼핑</Title1>
            </Button>
            <Button2 onClick={() => setViewNext2(true)}>
              <Title1>B : 영화관</Title1>
            </Button2>
            <Button3 onClick={() => setViewNext3(true)}>
              <Title1>C : 카페</Title1>
            </Button3>
          </BtnPart>
        </StoryPart>
      </Container>
    );
  }
  if (viewNext && !viewNext2 && !viewNext3) {
    return <Scene18 />;
  }
  if (!viewNext && viewNext2 && !viewNext3) {
    return <Scene19 />;
  }
  if (!viewNext && !viewNext2 && viewNext3) {
    return <Scene20 />;
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
  background-color: lightpink;
`;

const Button2 = styled.button`
  width: 30rem;
  height: 5rem;
  font-size: 1rem;
  background-color: lightgreen;
`;

const Button3 = styled.button`
  width: 30rem;
  height: 5rem;
  font-size: 1rem;
  background-color: lightyellow;
`;
