import { styled } from 'styled-components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Chatting from './Chatting';
import ChatTarget from '../../Components/ChatTarget';
import search from '../../Assets/Images/search.png';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { ChatData } from '../../Assets/Data/ChatData';

const ChatList = () => {
  const navigate = useNavigate();
  const goChatting = () => {
    navigate('/chat/chatting');
  };
  return (
    <AllContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ListContainer>
        <TitleContainer>
          <Title>Messages</Title>
        </TitleContainer>
        <SearchContainer htmlFor="search">
          <SearchWrapper>
            <SearchIcon src={search}></SearchIcon>
          </SearchWrapper>
          <SearchInput placeholder="Search..." id="search"></SearchInput>
        </SearchContainer>
        <TargetList>
          {ChatData.map((data, id) => (
            <ChatTarget
              key={id}
              chatData={data}
              goChat={goChatting}
            ></ChatTarget>
          ))}
        </TargetList>
      </ListContainer>
      <AnimatePresence>
        <Routes>
          <Route path="chatting" element={<Chatting />}></Route>
          {/* 중첩 라우팅 */}
        </Routes>
      </AnimatePresence>
    </AllContainer>
  );
};

const AllContainer = styled(motion.div)`
  /* motion으로 라우터 애니메이션 설정 */
  width: 92%;
  height: 97vh;
  border-radius: 15px;
  margin-left: 10px;
  display: flex;
`;
const ListContainer = styled.div`
  width: 25%;
  height: 97vh;
  border-radius: 15px;
  padding: 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #1a66ff;
`;
const WriteWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const WriteIcon = styled.img`
//   width: 50%;
//   height: 50%;
// `;

const SearchContainer = styled.label`
  width: 100%;
  height: 50px;
  margin: 20px;
  padding: 0 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
`;
const SearchWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchIcon = styled.img`
  width: 60%;
  height: 70%;
  cursor: pointer;
`;
const SearchInput = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  font-size: 15px;
  color: #5b5b5b;
  background-color: transparent;
`;
const TargetList = styled.div`
  width: 110%;
  height: 100%;
  margin-top: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff; /*스크롤바 뒷 배경 색상*/
  }
`;

export default ChatList;
