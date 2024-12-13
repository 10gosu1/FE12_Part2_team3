import GlobalStyle from './../styles/global';
import Title from './../components/Title';
import InterestIdol from './../components/InterestIdol';
import InterestIdolAdd from './../components/InterestIdolAdd';
import styled from 'styled-components';

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Mypage = () => {
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <GlobalStyle />
      <section id="mypage">
        <Inner>
          <Title>내가 관심있는 아이돌</Title>
          <InterestIdol />
          <Title>관심 있는 아이돌을 추가해보세요.</Title>
          <InterestIdolAdd />
        </Inner>
      </section>
    </>
  );
};

export default Mypage;
