import styled from "styled-components";
import scene19 from "../assets/scene19.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Fail from "./Fail";
import Success from "./Sucess";

export default function Scene19() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene19} />
        </ImagePart>
        <StoryPart>
          <Title1>
            친구와 영화관에 온 네모!
            <br />
            배부른데 팝콘이 눈에 아른거립니다!
          </Title1>
          <BtnPart>
            <Button onClick={() => setViewFail(true)}>
              <Title1>A : 영화관은 팝콘이지!</Title1>
            </Button>
            <Button onClick={() => setViewNext(true)}>
              <Title1>B : 남길 것 같은데, 참자..</Title1>
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
    return <Success />;
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
