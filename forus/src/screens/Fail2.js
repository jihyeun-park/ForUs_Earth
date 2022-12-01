import styled from "styled-components";
import bear from "../assets/bear.jpg";
import { Title2 } from "../fonts/text";

function Fail2() {
  return (
    <Container>
      <ImagePart>
        <LogoImg src={bear} />
      </ImagePart>
      <StoryPart>
        <Title2>
          파키스탄에게 이번 여름은 최악의 여름이었을 것입니다. <br />
          7월부터 예년의 3배가 넘는 비가 내려서 <br />
          국토의 3분의 1이 물에 잠겼기 때문인데요. <br />
          홍수 피해 규모만 무려 13조원이라고 합니다. <br />
          파키스탄에는 왜 이렇게 많은 양의 비가 내렸을까요? <br />
          파키스탄의 전례 없는 대홍수는 <br />
          바로 지구온난화로 인한 이상기후와 기후변화 때문입니다. <br />
          지구온난화의 원인인 ‘온실가스’의 전세계 배출량 중 <br />
          파키스탄이 차지하는 양은 1% 미만입니다. <br />
          그럼에도 불구하고 파키스탄은 <br />
          기후 변화로 인한 피해를 막대하게 겪고 있습니다.
          <br />
          우리는 파키스탄과 함께 ‘지구’라는 공간을 공유하는 <br />
          지구 공동체 구성원입니다. <br />
          이상기후와 기후변화에 대한 책임 의식을 가지고 <br />
          환경을 보호하는 소비를 하기 위해 <br />
          노력하는 세계 시민이 됩시다.
        </Title2>
      </StoryPart>
    </Container>
  );
}

export default Fail2;

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
