import styled from "styled-components";
import bear from "../assets/bear.jpg";
import { Title2 } from "../fonts/text";

function Fail() {
  return (
    <Container>
      <ImagePart>
        <LogoImg src={bear} />
      </ImagePart>
      <StoryPart>
        <Title2>
          지난 여름을 기억하시나요? <br />
          최악의 이상기후로 인해 <br />전 세계에 피해가 발생했던 여름이었습니다.
          <br />
          가뭄과 홍수로 인한 피해액은 상상을 초월하고,
          <br />
          이상기후로 인해 심각한 식량 위기가 찾아왔지요. <br />
          유럽을 덮친 가뭄으로 프랑스와 이탈리아의 포도는 말랐고, <br />
          강이 말라 숨겨졌던 유적지가 드러날 정도였습니다. <br />
          라인강은 독일의 남북을 연결하는 거대한 강으로, <br />
          다양한 산업의 원자재부터 생필품까지 <br />
          매년 약 2억 톤의 화물이 운반됩니다.
          <br />
          라인강을 통한 물류선은 유럽의 제조업을 지탱하는 핵심입니다.
          <br /> 하지만 지난 여름, 라인강의 수위가 40cm 이하로 감소해,
          <br /> 라인강을 오가는 선박의 운행이 중단되었습니다.
          <br /> 이로 인해 독일 뿐만 아니라 전 유럽에 물류 대란이 발생했습니다.
          <br /> 라인강이 말라 정상적으로 화물 운송이 이루어지지 않았고, <br />
          이로인해 경제적인 피해가 발생한것이지요. <br />킬 세계경제연구소의
          2021년 보고서에 따르면 <br />
          이와 같은 낮은 수위가 30일 동안 지속될 경우
          <br />
          독일 전체 산업 생산량이 1% 감소한다고 경고했던 바 있습니다. <br />
          이처럼 이상 기후로 인한 예상치 못한 피해는 <br />
          전세계 곳곳에서 발생할 수 있습니다. <br />
          모두가 한 사회를 함께 살아가는 구성원으로서 <br />
          경각심을 가지고 책임감 있는 <br />
          소비와 선택을 하도록 노력해볼까요?
        </Title2>
      </StoryPart>
    </Container>
  );
}

export default Fail;

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
