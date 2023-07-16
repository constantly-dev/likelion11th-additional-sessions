import { styled } from 'styled-components';

const ChatTarget = (props) => {
  const { targetName, content, time, img } = props.chatData;
  return (
    <Container onClick={props.goChat}>
      <ImgWrapper>
        <TargetImg src={img}></TargetImg>
      </ImgWrapper>
      <SummaryContainer>
        <SummaryTop>
          <Target>{targetName}</Target>
          <Time>{time}</Time>
        </SummaryTop>
        <SummaryBottom>{content}</SummaryBottom>
      </SummaryContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  margin-bottom: 25px;
  cursor: pointer;
`;
const ImgWrapper = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TargetImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
const SummaryContainer = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 5px;
`;
const SummaryTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;
const Target = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
`;
const Time = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #999999;
`;
const SummaryBottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #5b5b5b;
`;

export default ChatTarget;
