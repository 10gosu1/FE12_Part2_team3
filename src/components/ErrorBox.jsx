import styled from 'styled-components';
import logo from './../assets/header/logo.svg';

const Error = styled.div`
  width: 200px;
  margin: 70px auto;

  text-align: center;
  > img {
    height: 20px;
  }
  > h3 {
    margin-top: 30px;
    font-size: 16px;
    color: var(--hotpink);
    font-weight: 600;
  }
  > p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  > .btn {
    margin-top: 20px;
  }
`;

const ErrorBox = () => {
  const handleRefresh = () => {
    history.go(0);
  };
  return (
    <Error>
      <img src={logo} alt="펜덤케이" />
      <h3>문제가 발생했습니다!</h3>
      <p>다시 시도해주세요.</p>
      <button type="button" className="btn radius" onClick={handleRefresh}>
        새로고침 하기
      </button>
    </Error>
  );
};

export default ErrorBox;
