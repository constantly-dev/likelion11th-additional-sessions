import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import mjulogo from '../../Assets/Images/mjulogo.svg';
const Home = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleContainer>
        <Logo src={mjulogo}></Logo>
        <Title>명지대 멋쟁이사자처럼 11기</Title>
        <SubTitle>"CHAT WITH MEMBER"</SubTitle>
      </TitleContainer>
      <Explain>✉️ 왼쪽 채팅 아이콘을 눌러보세요!</Explain>
    </Container>
  );
};
const Container = styled(motion.div)`
  width: 92%;
  height: 97vh;
  border-radius: 15px;
  margin-left: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a66ff;
  border-radius: 30px 0 0 0;
`;
const Logo = styled.img`
  margin-bottom: 10px;
`;
const Title = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
`;
const SubTitle = styled.div`
  width: auto;
  height: auto;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;
const Explain = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
`;

export default Home;
