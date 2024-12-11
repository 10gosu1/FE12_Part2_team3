import React from 'react';
import GlobalStyle from './../styles/global';
import box from './../assets/mypage/mypage_box.png';

const Mypage = () => {
  return (
    <>
      <GlobalStyle />
      <section id="mypage">
        <div className="inner">
          <div className="title">내가 관심있는 아이돌</div>
          <ul className="interest_idol">
            <li>
              <img src={box} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Mypage;
