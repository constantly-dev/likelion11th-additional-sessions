import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import lionLogo from '../Assets/Images/lionlogo.svg';
import chat from '../Assets/Images/chat.png';
import call from '../Assets/Images/call.png';
import group from '../Assets/Images/group.png';
import app from '../Assets/Images/apps.png';
import folder from '../Assets/Images/folder.png';
import setting from '../Assets/Images/setting.png';
import myProfile from '../Assets/Images/myProfile.jpg';
const Menu = () => {
  const icons = [chat, call, group, app, folder, setting];
  const iconAddress = ['chat', 'call', 'group', 'app', 'folder', 'setting']; //이걸 이렇게 정적으로 해야하나?

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <MenuWrapper>
        <LogoWrapper>
          <LogoImg src={lionLogo} onClick={goHome}></LogoImg>
        </LogoWrapper>
        {icons.map((icon, index) => (
          <IconWrapper key={index}>
            <IconImg
              src={icon}
              onClick={() => {
                navigate(`${iconAddress[index]}`);
              }}
            ></IconImg>
          </IconWrapper>
        ))}
      </MenuWrapper>
      <ProfileImg src={myProfile}></ProfileImg>
    </Container>
  );
};

const Container = styled.div`
  width: 8%;
  height: 97vh;
  border-radius: 15px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MenuWrapper = styled.div`
  width: 100%;
  height: 65%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 15%;
  border-radius: 15px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 80%;
  height: 80%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const IconWrapper = styled.div`
  width: 45%;
  height: 15%;
  margin: 10px 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;
const IconImg = styled.img`
  width: 30px;
  height: 30px;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: all 0.5s;
  &:hover {
    transform: rotate(20deg);
  }
`;

export default Menu;
