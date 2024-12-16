import Title from './../components/Title';
import InterestIdol from './../components/InterestIdol';
import InterestIdolAdd from './../components/InterestIdolAdd';

const Mypage = () => {
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section id="mypage">
        <Title>내가 관심있는 아이돌</Title>
        <InterestIdol />
        <Title>관심 있는 아이돌을 추가해보세요.</Title>
        <InterestIdolAdd />
      </section>
    </>
  );
};

export default Mypage;
