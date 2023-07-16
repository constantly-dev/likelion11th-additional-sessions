import { styled } from 'styled-components';
import myImg from '../Assets/Images/myProfile.jpg';

const MyChatBox = ({ content }) => {
  return (
    <Container>
      <ContentContainer>
        <TargetName>You</TargetName>
        <Content>{content}</Content>
      </ContentContainer>
      <ProfileWrapper>
        <Profile src={myImg}></Profile>
      </ProfileWrapper>
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
  margin-left: 20px;
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
  align-items: flex-end;
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
  border: 1px solid blue;
  border-radius: 10px 0 10px 10px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: #1a66ff;
  color: #ffffff;
  font-size: 17px;
`;

export default MyChatBox;
