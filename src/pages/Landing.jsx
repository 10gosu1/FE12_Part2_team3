import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/header/logo.svg';
import landing from './../assets/landing/landing.png';
import phone1 from './../assets/landing/phone_1.png';
import phone2 from './../assets/landing/phone_2.png';
import phone3 from './../assets/landing/phone_3.png';
import bg1 from './../assets/landing/bg_1.png';
import bg2 from './../assets/landing/bg_2.png';
import bg3 from './../assets/landing/bg_3.png';
import styled from 'styled-components';

const LandingTopStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 1000px;
  padding-top: 60px;
  margin: 0 auto;
  > .tit {
    margin-bottom: 30px;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    > span {
      color: var(--coralpink);
    }
  }
  > .logo {
    text-align: center;
    img {
      height: 97px;
    }
  }
  > .thum {
    position: absolute;
    top: 15px;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
    img {
      width: 932px;
      opacity: 0.7;
    }
  }
  > .btn {
    width: 447px;
    margin: auto auto 120px;
  }
`;

const LandingListStyle = styled.ul`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 310px;
    transform: translateX(-50%);
    z-index: -1;
    width: 187px;
    height: calc(100% - 500px);
    background: linear-gradient(
      180deg,
      #030615 0%,
      #051d31 42.67%,
      #051e32 53.12%,
      #051c30 74.27%,
      #030b1c 100%
    );
    opacity: 0.5;
  }
  > li {
    position: relative;
    padding-top: 170px;
    padding-bottom: 193px;
    > .tit {
      margin-bottom: 60px;
      text-align: center;
      > b {
        display: block;
        margin-bottom: 8px;
        color: #d2c030;
        font-size: 16px;
        font-weight: 500;
      }
      > p {
        font-size: 24px;
        font-weight: 700;
      }
    }
    > .phone {
      width: 320px;
      margin: 0 auto;
      > img {
        width: 100%;
      }
    }
  }
  > li::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
  }
  > li:nth-child(1)::after {
    background:
      radial-gradient(
        50% 50% at 50% 50%,
        rgba(2, 0, 14, 0) 0%,
        rgba(2, 0, 14, 0.18) 37.5%,
        rgba(2, 0, 14, 0.5) 79.5%,
        #02000e 100%
      ),
      url(${bg1}) no-repeat 50% 50% / cover;
  }
  > li:nth-child(2)::after {
    background:
      radial-gradient(
        50% 50% at 50% 50%,
        rgba(2, 0, 14, 0) 0%,
        rgba(2, 0, 14, 0.18) 37.5%,
        rgba(2, 0, 14, 0.5) 79.5%,
        #02000e 100%
      ),
      url(${bg2}) no-repeat 50% 50% / cover;
  }
  > li:nth-child(3)::after {
    background:
      radial-gradient(
        50% 50% at 50% 50%,
        rgba(2, 0, 14, 0) 0%,
        rgba(2, 0, 14, 0.18) 37.5%,
        rgba(2, 0, 14, 0.5) 79.5%,
        #02000e 100%
      ),
      url(${bg3}) no-repeat 50% 50% / cover;
  }
`;

const Landing = () => {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/list');
  };

  return (
    <>
      <LandingTopStyle>
        <div className="tit">
          내가 좋아하는 아이돌을
          <br />
          가장 <span>쉽게 덕질</span> 하는 방법
        </div>
        <div className="logo">
          <Link to="/list">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="thum">
          <img src={landing} alt="" />
        </div>
        <button className="btn" onClick={handleButtonClick}>
          지금시작하기
        </button>
      </LandingTopStyle>
      <div className="landing_btm">
        <LandingListStyle>
          <li>
            <div className="tit">
              <b>후원하기</b>
              <p>
                좋아하는 아이돌에게
                <br />
                쉽게 조공해 보세요
              </p>
            </div>
            <div className="phone">
              <img src={phone1} alt="" />
            </div>
          </li>
          <li>
            <div className="tit">
              <b>이달의 아티스트</b>
              <p>
                내 아티스트에게 1등의
                <br />
                영예를 선물하세요
              </p>
            </div>
            <div className="phone">
              <img src={phone2} alt="" />
            </div>
          </li>
          <li>
            <div className="tit">
              <b>나만의 아티스트</b>
              <p>
                좋아하는 아티스트들의
                <br />
                소식을 모아보세요
              </p>
            </div>
            <div className="phone">
              <img src={phone3} alt="" />
            </div>
          </li>
        </LandingListStyle>
      </div>
    </>
  );
};

export default Landing;
