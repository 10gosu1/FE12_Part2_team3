import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useContext } from 'react';
import logo from './../assets/header/logo.svg';
import landing from './../assets/landing/landing.png';
import phone1 from './../assets/landing/phone_1.png';
import phone2 from './../assets/landing/phone_2.png';
import phone3 from './../assets/landing/phone_3.png';
import bg1 from './../assets/landing/bg_1.png';
import bg2 from './../assets/landing/bg_2.png';
import bg3 from './../assets/landing/bg_3.png';
import styled from 'styled-components';
import { CreditContextAction } from './../App';

gsap.registerPlugin(ScrollTrigger);

const LandingTopStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 1000px;
  height: 100dvh;
  padding-top: clamp(0px, 5.5dvh, 60px);
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
      max-height: 97px;
      height: 9dvh;
    }
  }
  > .thum {
    position: absolute;
    top: 15px;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
    img {
      max-height: 780px;
      height: 72.222dvh;
      opacity: 0.7;
    }
  }
  > .btn {
    width: 447px;
    margin: auto auto 120px;
  }

  @media (max-width: 1200px) {
    max-height: none;
    height: auto;
    padding-top: clamp(0px, 5.5dvh, 40px);
    > .tit {
      margin-bottom: 32px;
      font-size: 20px;
    }
    > .logo {
      margin-bottom: 40px;
      img {
        max-height: none;
        height: 62px;
      }
    }
    > .thum {
      position: static;
      margin-bottom: 130px;
      transform: translateX(0);
      text-align: center;
      img {
        max-height: none;
        height: 600px;
        opacity: 1;
      }
    }
    > .btn {
      width: 447px;
      margin: 0 auto 120px;
    }
  }

  @media (max-width: 768px) {
    > .tit {
      margin-bottom: 20px;
    }
    > .logo {
      margin-bottom: 27px;
      img {
        height: 45px;
      }
    }
    > .thum {
      overflow: hidden;
      margin-bottom: 93px;
      display: flex;
      justify-content: center;
      img {
        height: 330px;
      }
    }
    > .btn {
      width: 230px;
      margin: 0 auto 100px;
    }
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
    max-width: 187px;
    width: 15.5833dvh;
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
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100dvh;
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
      display: flex;
      justify-content: center;
      > img {
        height: 57.75dvh;
        max-height: 693px;
      }
    }
  }
  > li::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    display: block;
    width: 100dvh;
    height: 100dvh;
    opacity: 1;
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

  @media (max-width: 1200px) {
    &::after {
      max-width: none;
      width: 117px;
    }
    > li {
      padding: 85px 0 105px;
      height: auto;
      > .tit {
        margin-bottom: 47px;
        > p {
          font-size: 20px;
        }
      }
      > .phone {
        > img {
          height: 433px;
          max-height: none;
        }
      }
    }
    > li::after {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    > li {
      padding: 85px 0;
      > .phone {
        > img {
          height: 520px;
        }
      }
    }
  }
`;

const Landing = () => {
  const navigate = useNavigate();
  const { setMyCredit } = useContext(CreditContextAction);
  const handleButtonClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/list');
    // 크레딧 0 으로 초기화
    setMyCredit(0);
  };

  useEffect(() => {
    const gsapLogo = gsap.timeline();
    gsapLogo.from('.landingtop .gsap_logo', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'Stepped.in',
      stagger: 0.4,
    });
    const gsapThum = gsap.timeline();
    gsapThum.from('.landingtop .gsap_thum', {
      opacity: 0,
      duration: 0.7,
      delay: 1,
      ease: 'Stepped.in',
      stagger: 0.4,
    });

    document.querySelectorAll('.landing_list > li').forEach((li) => {
      const images = li.querySelectorAll('img');
      const texts = li.querySelectorAll('.tit');
      gsap.from(images, {
        scrollTrigger: {
          trigger: li,
          start: '15% 60%',
          end: '50% 60%',
          scrub: true,
        },
        y: 200,
        opacity: 0,
        scale: 0.6,
        ease: 'Power2.inOut',
        stagger: 0.2,
      });

      gsap.from(texts, {
        scrollTrigger: {
          trigger: li,
          start: '0% 60%',
          end: '20% 60%',
          scrub: true,
        },
        y: -100,
        opacity: 0,
        scale: 0.6,
        ease: 'Power2.inOut',
        stagger: 0.2,
      });
    });
  }, []);

  return (
    <>
      <LandingTopStyle className="landingtop">
        <div className="tit gsap_logo">
          내가 좋아하는 아이돌을
          <br />
          가장 <span>쉽게 덕질</span> 하는 방법
        </div>
        <div className="logo gsap_logo">
          <Link to="/list">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="thum gsap_thum">
          <img src={landing} alt="" />
        </div>
        <button className="btn" onClick={handleButtonClick}>
          지금시작하기
        </button>
      </LandingTopStyle>
      <div className="landing_btm">
        <LandingListStyle className="landing_list">
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
