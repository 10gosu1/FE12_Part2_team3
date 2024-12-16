import styled from 'styled-components';
import close from './../assets/mypage/icon_close.svg';
import check from './../assets/mypage/icon_check.svg';

const IdolStyle = styled.div`
  position: relative;
  > .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  > .box {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    overflow: hidden;
    border-radius: 999px;

    > .line {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 999px;
      padding: 5px;
      border: 1.5px solid var(--coralpink);
      font-size: 0;
      .thum {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        > .check {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 2;
          border-radius: 999px;
          background: linear-gradient(
            271deg,
            rgba(249, 110, 104, 0.5) -9.84%,
            rgba(254, 87, 143, 0.5) 107.18%
          );
          opacity: 0;
          transition: all 0.1s;
          cursor: pointer;
          &:active {
            transform: scale(1.5);
          }
          &.active {
            opacity: 1;
            &.active img {
              opacity: 1;
            }
          }
          > img {
            width: 52px;
            opacity: 0;
            transition: all 0.1s;
          }
        }
        > img {
          border-radius: 999px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  > .content {
    text-align: center;
    margin-top: 8px;
    > .name {
      color: var(--white);
      font-size: 16px;
      font-weight: 700;
      line-height: 1.625;
    }
    > .group {
      margin-top: 2px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }
  }
`;

const IdolBox = ({ item, type, onClick, isActive }) => {
  return (
    <IdolStyle>
      {type === 'my' && (
        <div className="close" onClick={() => onClick(item)}>
          <img src={close} alt="삭제하기" />
        </div>
      )}
      <div className="box">
        <div className="line">
          <div className="thum">
            {type === 'add' && (
              // active 클래스 추가
              <div
                className={`check ${isActive ? 'active' : ''}`}
                onClick={onClick}
              >
                <img src={check} alt="체크" />
              </div>
            )}
            <img src={item.profilePicture} alt={item.name} />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="name">{item.name}</div>
        <div className="group">{item.group}</div>
      </div>
    </IdolStyle>
  );
};

export default IdolBox;
