const Resume = () => {
  return (
    <>
      <div>
        <h2>Education</h2>
        <p>충남대학교 컴퓨터융합학부 재학 (2021. 03. ~ 2024. 06. 현재)</p>
      </div>
      <hr />
      <div style={{ paddingBottom: '12px' }}>
        <h2>Projects</h2>
        <div>
          <h4>유사 악성코드 분석을 위한 웹 기반 시각화 도구 (2024. 03. ~ 2024. 06. 현재)</h4>
          <ul>
            <li> 악성코드의 API call sequence 데이터를 분석하여 유사한 악성코드끼리 클러스터링하고 결과를 시각화</li>
            <li> 자카드 유사도, 코사인 유사도 등 여러 유사도 파악 알고리즘 활용</li>
            <li> Hierarchical Clustering, K-means Clustering 등 여러 클러스터링 알고리즘 활용</li>
            <li> d3.js 를 이용하여 클러스터링 결과를 그래프로 시각화</li>
          </ul>
        </div>
        <div>
          <h4>무인 항공기용 재난 지역 Semantic Segmentation 모델 (2024. 01. ~ 2024. 02.)</h4>
          <ul>
            <li>TransUnet 기반 Semantic Segmentation 모델</li>
            <li>모델의 최적화 및 경량화를 위해 Onnx, TensorRt 활용</li>
            <li>Jetson Nano, Jetson Orin Nano board에 올려 모델 테스트</li>
            <li>모델의 크기는 베이스 모델 크기의 13% 정도로 줄이면서도 성능은 베이스 모델의 87% 정도를 유지</li>
          </ul>
        </div>
        <div>
          <h4>'Relay Sketch' : AI와 함께하는 실시간 온라인 그림 퀴즈 게임 (2023. 06. ~ 2023. 08.)</h4>
          <ul>
            <li>플레이어가 입력한 주제를 AI가 이미지로 변환하면 각 플레이어가 자신에게 주어진 이미지를 보고 정답을 맞히는 게임 </li>
            <li>TypeScript, React, Vite 를 이용하여 프론트엔드 개발 담당</li>
            <li>버전 관리와 협업을 위해 Git/Github 활용</li>
            <li>개발 환경 세팅과 배포를 위해 Docker 활용</li>
          </ul>
        </div>
        <div>
          <h4>'Strap' : 지역 헬스장 기반 헬스 케어 애플리케이션 (2022. 03. ~ 2022. 06.)</h4>
          <ul>
            <li>
              지역 내 같은 헬스장에 다니는 사람들끼리 그룹을 만들어 함께 운동하고 서로 동기부여함으로써 지속적으로 헬스를 할 수 있도록 돕는
              애플리케이션
            </li>
            <li>Android Studio(with Java)를 활용한 안드로이드 애플리케이션</li>
            <li>버전 관리와 협업을 위해 Git/Github 활용</li>
            <li>교내 Project Fair에서 18팀 중 4위 기록</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
