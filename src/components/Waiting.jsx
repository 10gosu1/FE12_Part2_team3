import styled from 'styled-components';
import SponsorModal from '../modal/SponsorModal';
import { useState } from 'react';
import GlobalStyle from './../styles/global';
import { getDonation } from './../API/WaitingApi';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Title = styled.h2`
  color: var(--white);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const CardWrapper = styled.div`
  width: 282px;
  margin: 0 10px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: inherit;
`;

const CardImg = styled.img`
  width: 100%;
  border-radius: inherit;
`;

const StyledBoxButton = styled(BoxButton)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
  color: var(--white);
`;

const Title2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  color: var(--gray-200);
  margin: 5px 0;
`;

const Footer = styled.div`
  width: 100%;
  padding: 10px;
  color: var(--white);
`;

const DonationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CreditIcon = styled(Credit)``;

const DonationDetails = styled.div`
  display: flex;
  align-items: center;
  color: var(--coralpink);
  font-size: 14px;
`;

const DonationAmount = styled.span`
  font-size: 12px;
  margin-left: 1px;
`;

const DaysLeft = styled.span`
  font-size: 12px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 5px;
  height: 1px;
  margin: 5px 0;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  background-color: var(--coralpink);
  height: 100%;
`;

const Waiting = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <GlobalStyle />
      <div>
        <Container>
          <Title>후원을 기다리는 조공</Title>
          <CardWrapper key={item.id}>
            <ImgWrapper>
              <CardImg src={item.idol.profilePicture} alt={item.idol.name} />
              <StyledBoxButton onClick={() => setModalState((prev) => !prev)}>
                후원하기
              </StyledBoxButton>
            </ImgWrapper>
            <Content>
              <Subtitle>{item.subtitle}</Subtitle>
              <Title2>{item.title}</Title2>
            </Content>
            <Footer>
              <DonationInfo>
                <DonationDetails>
                  <CreditIcon width="14px" height="14px" />
                  <DonationAmount>
                    {item.receivedDonation.toLocalString()}
                  </DonationAmount>
                </DonationDetails>
                <DaysLeft>
                  {Math.ceil(
                    (new Date(item.deadline) - new Date()) /
                      (1000 * 60 * 60 * 24),
                  )}
                  일 남음
                </DaysLeft>
              </DonationInfo>
            </Footer>
          </CardWrapper>
        </Container>
      </div>
    </>
  );
};

export default Waiting;
