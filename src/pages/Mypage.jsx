import React, { useState, useEffect } from 'react';
import useIdolApi from './../hooks/useIdolApi';
import Title from './../components/Title';
import InterestIdol from './../components/InterestIdol';
import InterestIdolAdd from './../components/InterestIdolAdd';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const MypageSection = styled.section`
  margin-top: 78px;
  > .hrbox:nth-child(3) {
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 1200px) {
    margin-top: 14px;
    > .hrbox:nth-child(3) {
      margin-bottom: 32px;
    }
  }
`;

const Mypage = () => {
  // if (error) return <div>Error: {error.message}</div>;
  //localStorage.setItem('interestID',JSON.stringify({}));

  // "체크된 아이돌 데이터" 관리
  const [activeData, setActiveData] = useState([]);
  // 관심있는 아이돌 로딩 관리
  const [loadingLocal, setLoadingLocal] = useState(true);
  // "아이돌 로컬스토리지 데이터" 관리
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    // 로컬스토리지 데이터 가져오기
    const idolData = localStorage.getItem('interestIdols');
    if (idolData) {
      const parseData = JSON.parse(idolData);
      setLocalData(parseData);
    }
    setLoadingLocal(false);
  }, []);

  // gpt) 클릭 시 해당 아이템의 data를 토글
  const handleIdolCheck = (data) => {
    setActiveData((prevActiveDatas) => {
      if (prevActiveDatas.includes(data)) {
        // gpt) 이미 선택된 아이템이면, 배열에서 제거
        return prevActiveDatas.filter((item) => item !== data);
      } else {
        // gpt) 선택되지 않은 아이템이면, 배열에 추가
        return [...prevActiveDatas, data];
      }
    });
  };

  // 추가하기 버튼 클릭
  const handleAddIdol = () => {
    // gpt) 기존 로컬스토리지에서 아이돌 데이터를 불러오기 || [] -> 없다면 빈 배열 불러오기
    const prevData = JSON.parse(localStorage.getItem('interestIdols')) || [];
    // gpt) 새로운 데이터를 기존 데이터에 추가
    const updatedData = [...prevData, ...activeData];
    // gpt) 로컬스토리지에 업데이트된 데이터 저장
    localStorage.setItem('interestIdols', JSON.stringify(updatedData));
    // gpt) "아이돌 로컬스토리지 데이터" 에 로컬스토리지 상태 저장
    setLocalData(updatedData);
    // 토스트 노출
    toast(`${activeData.length}명의 아이돌을 추가하였습니다.`);
    // 체크된 아이돌 초기화
    setActiveData([]);
  };

  // 삭제하기 버튼 클릭
  const handleRemove = (el) => {
    // "아이돌 로컬스토리지 데이터" = item 안에 클릭한 el을 제거(= filter)
    const removeUpdatedData = localData.filter((item) => item !== el);
    // 삭제한 데이터를 다시 로컬스토리지에 업데이트
    localStorage.setItem('interestIdols', JSON.stringify(removeUpdatedData));
    // "아이돌 로컬스토리지 데이터" 에 로컬스토리지 상태 저장
    setLocalData(removeUpdatedData);
  };

  // apihook사용
  // 데이터 로컬스토리지 필터 순서표시 1) 2) 3)
  const {
    // 1) 처음에 전체 데이터를 다른 이름으로 받아옴
    data: allData,
    loading: loading,
    error: error,
    setOptions: setOptions,
    // 추가수정) pageSize 설정하고, 응답에 받은 nextCursor 활용해서 다음 페이지 데이터 요청할 때 cursor 값 설정해서 받은 데이터를 추가하는 업데이트
  } = useIdolApi('pageSize=999');

  // 2) gpt) 전체 데이터 중 로컬스토리지에 없는 아이템을 골라 배열을 새롭게 만들어서 저장
  const filteredData = allData.filter(
    (idol) => !localData.some((localIdol) => localIdol.id === idol.id),
  );

  return (
    <>
      <MypageSection>
        {/* 관심있는 아이돌 없는 경우 노출x */}
        {localData.length > 0 ? (
          <>
            <Title>내가 관심있는 아이돌</Title>
            <InterestIdol
              // 3) 새롭게 저장한 배열을 넘김
              data={localData}
              loading={loadingLocal}
              handleRemove={handleRemove}
            />
          </>
        ) : null}
        <div className="hrbox"></div>
        <Title>관심 있는 아이돌을 추가해보세요.</Title>
        <InterestIdolAdd
          data={filteredData}
          loading={loading}
          error={error}
          setOptions={setOptions}
          handleIdolCheck={handleIdolCheck}
          handleAddIdol={handleAddIdol}
          activeData={activeData}
        />
      </MypageSection>
    </>
  );
};

export default Mypage;
