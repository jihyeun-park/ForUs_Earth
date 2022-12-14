import styled from "styled-components";
import logo from "../assets/character.PNG";
import React, { useState } from "react";
import Scene2 from "./Scene2";
import { Title1 } from "../fonts/text";

function Scene1() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={logo} />
        </ImagePart>
        <StoryPart>
          <Title1>
            안녕하세요? 저는 네모입니다! <br />
            지금부터 저를 따라오세요! <br />
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
    return <Scene2 />;
  }
}

export default Scene1;

const Container = styled.div`
  weight: 320px;
  height: 1024px;
`;

const ImagePart = styled.div`
  weight: 750px;
  height: 30%;
`;

const LogoImg = styled.img`
  height: 300px;
  width: 300px;
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
  height: 3rem;
  font-size: 1rem;
  background-color: lightblue;
`;
