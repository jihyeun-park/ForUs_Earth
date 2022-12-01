import styled from "styled-components";
import scene3 from "../assets/scene3.PNG";
import React, { useState } from "react";
import { Title1 } from "../fonts/text";
import Scene4 from "./Scene4";
import Fail from "./Fail";

function Scene3() {
  const [viewNext, setViewNext] = useState(false);
  const [viewFail, setViewFail] = useState(false);

  if (!viewNext && !viewFail) {
    return (
      <Container>
        <ImagePart>
          <LogoImg src={scene3} />
        </ImagePart>
        <StoryPart>
          <Title1>
            네모가 끓인 된장찌개!
            <br />
            너무 맛있게 먹는 도중,
            <br /> 배가 슬슬 부른 네모..
            <br /> 과연 다 먹을 수 있을까요?
            <br />
            {/* <br />A : 다 먹을래요 <span />B : 남길래요 */}
          </Title1>
          <BtnPart>
            <Button onClick={() => setViewNext(true)}>
              <Title1>A : 다 먹을래요</Title1>
            </Button>
            <Button onClick={() => setViewFail(true)}>
              <Title1>B : 남길래요</Title1>
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
    return <Scene4 />;
  }
}

export default Scene3;

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
