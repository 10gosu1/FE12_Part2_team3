import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="">
        랜딩페이지 입니다.
        <nav>
          <ul>
            <li>
              <Link to="/list">로고</Link>
            </li>
            <li>
              <Link to="/list">지금시작하기</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Landing;
