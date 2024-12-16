// styled-components를 사용하기 위해 styled를 임포트합니다.
import styled from 'styled-components';

// 차트 내용을 감싸는 컨테이너 스타일
const ChartContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-top: 24px;
  width: 588px;
  height: 70px;
`;

// 이미지 스타일
const Img = styled.img`
  width: 60px;
  height: 60px;
  position: relative;
  top: 5px;
  left: 5px;
  gap: 8px;
  border-radius: 40px;
  opacity: 0;
  object-fit: cover;
`;

// 차트 정보를 담는 컨테이너 스타일
const ChartInfo = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10px;
`;

// 그룹 정보를 담는 스타일
const ChartGroup = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-around;
  align-items: center;
`;

// 순위 텍스트 스타일
const Rank = styled.p`
  color: orange; /* $brand-orange 색상으로 대체 */
`;

// 투표 수를 표시하는 스타일
const ChartVoteNum = styled.div`
  display: flex;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 0.6);
`;

// IdolChart 컴포넌트 정의
export default function IdolChart({ imgUrl, group, name, totalVotes, rank }) {
  return (
    <li>
      <ChartContents>
        <Img src={imgUrl} alt={`${group}-이미지`} />
        <ChartInfo>
          <ChartGroup>
            <Rank>{rank}</Rank>
            <p>{group}</p>
            <p>{name}</p>
          </ChartGroup>
          <ChartVoteNum>
            <p>{totalVotes}표</p>
          </ChartVoteNum>
        </ChartInfo>
      </ChartContents>
    </li>
  );
}
