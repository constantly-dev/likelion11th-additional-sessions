import { styled } from 'styled-components';

const OtherChatBox = () => {
  return (
    <Container>
      <ProfileWrapper>
        <Profile></Profile>
      </ProfileWrapper>
      <ContentContainer>
        <TargetName>Lion</TargetName>
        <Content>chatting...</Content>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  margin-bottom: 40px;
`;
const ProfileWrapper = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TargetName = styled.div`
  width: auto;
  height: 50%;
  font-size: 20px;
  font-weight: 600;
`;
const Content = styled.div`
  width: auto;
  height: 50%;
  border-radius: 0 10px 10px 10px;
  padding: 0 10px;
  background-color: #ffffff;
  font-size: 17px;
  display: flex;
  align-items: center;
`;

export default OtherChatBox;
