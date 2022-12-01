import styled from "styled-components";
import mogi from "../assets/mogi.jpg";
import { Title2 } from "../fonts/text";

function Fail3() {
  return (
    <Container>
      <ImagePart>
        <LogoImg src={mogi} />
      </ImagePart>
      <StoryPart>
        <Title2>
          여름철이면 늘 우리를 괴롭히던 모기! <br />
          하지만 모기는 더 이상 여름에만 우리를 괴롭게 하는 해충이 아닙니다.{" "}
          <br />
          가을 혹은 초겨울에도 곳곳에서 모기를 발견할 수 있고 사람들은 오히려
          여름에는 모기가 줄어들고 가을에 모기가 더 극성스럽다고 이야기합니다.{" "}
          <br />
          모기는 태어나면서부터 살아가기까지 수분이 필요합니다. <br />
          질병관리청 감염병분석센터에서 발표한 ‘2020년 국내 일본뇌염매개모기
          발생 감시 현황’에 따르면 늦여름의 많은 강수량과 초가을의 따뜻한 기온이
          모기 유충 성장에 적합한 서식지를 제공한다고 분석합니다. <br />
          모기는 약 27°C의 온도에서 가장 활발히 활동하고 32°C 이상의 온도에서는
          오히려 개체수가 감소합니다. <br />
          실제로 2021년 7월의 폭염은 낮 최고 기온이 33°C 이상이었고 짧은 장마로
          논이나 물웅덩이까지 말라버려 모기의 개체수가 줄어들면서 사람들이
          모기가 줄었다고 느낀 것이었습니다. <br />
          이렇듯 지구온난화의 영향으로 대한민국의 전체적인 계절별 기온이
          상승하면서 스스로 체온을 조절하지 못하는 모기는 이러한 기온변화에 따라
          여름보다는 가을에 개체수가 더 많아진 것이라고 볼 수 있습니다. <br />
          지구온난화로 인해 우리 주변의 자연환경이 점점 변해가고 있습니다. 더
          늦기 전에, 되돌릴 수 없기 전에 환경에 관심을 가져야 합니다.
        </Title2>
      </StoryPart>
    </Container>
  );
}

export default Fail3;

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
  margin-top: 30px;
  height: 20%;
`;
