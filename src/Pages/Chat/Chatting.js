import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import video from '../../Assets/Images/video.png';
import call from '../../Assets/Images/call.png';
import more from '../../Assets/Images/more.png';
import picture from '../../Assets/Images/picture.png';
import location from '../../Assets/Images/location.png';
import record from '../../Assets/Images/record.png';
import OtherChatBox from '../../Components/OtherChatBox';
import MyChatBox from '../../Components/MyChatBox';
import send from '../../Assets/Images/send.png';
import mjuLikeLion from '../../Assets/Images/mjulikelion.jpg';

const Chatting = () => {
  const [changeChat, setChangeChat] = useState('');
  const [fixChat, setFixChat] = useState([]);

  const onChangeChat = (e) => {
    setChangeChat(e.target.value);
  };

  const FixData = (e) => {
    e.preventDefault();
    setFixChat([...fixChat, changeChat]);
    setChangeChat(''); // input 초기화
  };

  // 채팅 scroll 자동 구현
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <AllContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ChatContainer>
        <TargetContainer>
          <TargetLeft>
            <ImgWrapper>
              <TargetImg src={mjuLikeLion}></TargetImg>
            </ImgWrapper>
            <SummaryContainer>
              <Target>LikeLion</Target>
              <SummaryContent>Chatting...</SummaryContent>
            </SummaryContainer>
          </TargetLeft>
          <TargetRight>
            <PlusIconBox>
              <PlusIconImg src={video}></PlusIconImg>
              <PlusIconImg src={call}></PlusIconImg>
              <PlusIconImg src={more}></PlusIconImg>
            </PlusIconBox>
          </TargetRight>
        </TargetContainer>
        <ChattingContainer>
          <ChattingScreen ref={scrollRef}>
            {/* 채팅 */}
            <OtherChatBox></OtherChatBox>
            {fixChat.map((chatContent, index) => (
              <MyChatBox content={chatContent} key={index}></MyChatBox>
            ))}
          </ChattingScreen>
          <SendContainer onSubmit={FixData}>
            <InputContainer>
              <ChatInput
                placeholder="Type a message"
                value={changeChat} // input의 value를 state로 관리
                onChange={onChangeChat}
              ></ChatInput>
              <InputIconContainer>
                <InputIcon src={picture}></InputIcon>
                <InputIcon src={location}></InputIcon>
                <InputIcon src={record}></InputIcon>
              </InputIconContainer>
            </InputContainer>
            <SendSubmit type="submit">
              <Send src={send}></Send>
            </SendSubmit>
          </SendContainer>
        </ChattingContainer>
      </ChatContainer>
      <PlusContainer></PlusContainer>
    </AllContainer>
  );
};

const AllContainer = styled(motion.div)`
  width: 75%;
  height: 97vh;
  border-radius: 15px;
  display: flex;
`;

const ChatContainer = styled.div`
  width: 65%;
  height: 97vh;
  padding: 34px 15px;
  border-radius: 15px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;
const TargetContainer = styled.div`
  width: 100%;
  height: 10%;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
// 위 왼쪽
const TargetLeft = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
`;
const ImgWrapper = styled.div`
  width: 14%;
  height: 100%;
`;
const TargetImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const SummaryContainer = styled.div`
  width: 85%;
  height: 100%;
  margin-left: 25px;
`;
const Target = styled.div`
  width: 100%;
  height: 50%;
  font-size: 25px;
  font-weight: 600;
`;
const SummaryContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #5b5b5b;
`;

//위 오른쪽
const TargetRight = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusIconBox = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
`;
const PlusIconImg = styled.img`
  width: 16%;
  height: 80%;
  margin: 0 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;
//여기부터는 실제 채팅창
const ChattingContainer = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;
const ChattingScreen = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 15px;
  padding: 40px 30px;
  margin: 10px 0;
  background-color: #f1f1f1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 20px;
  }
`;

const SendContainer = styled.form`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 90%;
  height: 90%;
  margin-right: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
`;

const ChatInput = styled.input`
  width: 70%;
  height: 80%;
  margin-left: 20px;
  background-color: transparent;
  font-size: 16px;
`;
const InputIconContainer = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputIcon = styled.img`
  width: 16%;
  height: 50%;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`;
const SendSubmit = styled.button``;
const Send = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: rotate(10deg);
  }
`;

// 여기부터 부가정보 칸
const PlusContainer = styled.div`
  width: 35%;
  height: 97vh;
  border-radius: 15px;
  margin-left: 10px;
  background-color: #ffffff;
`;

export default Chatting;
