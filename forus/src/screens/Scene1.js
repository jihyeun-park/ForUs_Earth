import styled from "styled-components";
import logo from "../assets/character.PNG";
import React, { useState } from "react";
import { Button } from "antd";
import Scene2 from "./Scene2";

function Scene1() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={logo} />
        </ImagePart>
        <StoryPart>
          안녕하세요? 저는 네모입니다! <br />
          지금부터 저를 따라오세요!
        </StoryPart>
        <div className="mainButtonWrapper">
          <Button onClick={() => setViewNext(true)}>Next</Button>
        </div>
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
  background-color: gray;
`;

const ImagePart = styled.div`
  height: 50%;
`;

const LogoImg = styled.img`
  height: 500px;
  width: 500px;
`;

const StoryPart = styled.div`
  height: 20%;
`;
