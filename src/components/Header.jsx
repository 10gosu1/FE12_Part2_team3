import { Link } from 'react-router-dom';
import logo from './../assets/header/logo.svg';
import profile from './../assets/header/profile.png';
import styled from 'styled-components';

let HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  > .inner {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    > .mypage_btn > a > img {
      height: 32px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div className="inner">
          <div className="logo">
            <Link to="/list">
              <img src={logo} alt="팬덤케이" />
            </Link>
          </div>
          <div className="mypage_btn">
            <Link to="/mypage">
              <img src={profile} alt="프로필" />
            </Link>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
