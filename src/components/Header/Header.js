import { useContext } from 'react';
import Logo from '../image/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../store/AuthContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonPrimary from './styled/ButtonPrimary';
import ModalProfile from './Modals/ModalProfile'

const ContainerHeader = styled.header`
  display: grid;
  grid-template-columns: 20vw 80vw;
  box-shadow: 0px 0px 4px 4px #707070;
  background-color: #f8f8f8;
`;

const HeaderHome = styled(Link)`
  display: flex;
  width: 40vw;
  margin: 0 40px;
  align-items: center;
  justify-content: flex-start;
`;

const Img = styled.img`
  width: 40px;
`;

const HeaderHomeLogo = styled.figure`
  margin: 5px;
`;

const HeaderHomeSlogan = styled.h2`
  margin: 5px;
`;

const NavigationMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

const NavigationMenuItem = styled.li`
  margin-right: 0px;
`;

const ContainerNavActions = styled.div` 
  display: flex;
  justify-content: flex-end;
`;

const Navigation = styled.nav`
  margin-right: 17px;
  padding: 5px 0;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const AnchorSignIn = styled(ButtonPrimary)`
  background-color: ${props => props.theme.secundaryColor
  };
  
  margin-right: 17px;

  &:hover {
    background-color: ${props => props.theme.secundaryColorBlur
  };
    border: 1px solid ${props => props.theme.secundaryColor
  };
  }
`;

const AnchorSignUp = styled(ButtonPrimary)`
  background-color: ${props => props.theme.primaryColor
  };

  margin-right: 40px;
`;

const ContainerActions = styled.span`
  display: flex;
  align-items: center;
`;

const AnchorProfile = styled(Anchor)`
  margin-right: 17px;
`;

const AnchorLogout = styled(ButtonPrimary)`
  background-color: ${props => props.theme.primaryColorBlur
  };
  margin-right: 40px;
`;

function Header() {
  const { isToken, logout, user } = useContext(AuthContext);
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeModalProfile = () => setClick(false);

  return (
    <ContainerHeader>
      <HeaderHome to="/">
        <HeaderHomeLogo className="header__home-logo">
          <Img src={Logo} alt="Logo" />
        </HeaderHomeLogo>
        <HeaderHomeSlogan className="header__home-slogan">
          # Alamesa
        </HeaderHomeSlogan>
      </HeaderHome>
      <ContainerNavActions>
        <Navigation className="navigation">
          <NavigationMenu>
            <NavigationMenuItem className="navigation__menu-item restaurant">
              <Anchor to="/restaurants">Restaurantes</Anchor>
            </NavigationMenuItem>
          </NavigationMenu>
        </Navigation>
        {isToken ? (
          <>
            <ContainerActions>
              <AnchorProfile 
                as={Link} 
                to={user}
                onClick={closeModalProfile}
                >
                <HeaderHomeLogo className="header__home-logo">
                  Profile
                  <FontAwesomeIcon icon="user-circle" />
                </HeaderHomeLogo>
              </AnchorProfile>
              {modal && <ModalProfile/>}
              <AnchorLogout as={Link} to="/" onClick={logout}>Cerrar sesión</AnchorLogout>
            </ContainerActions>
          </>
        ) : (
            <>
              <ContainerActions>
                <AnchorSignIn as={Link} to="/sign-in">Iniciar sesión</AnchorSignIn>
                <AnchorSignUp as={Link} to="/sign-up">Crear cuenta</AnchorSignUp>
              </ContainerActions>
            </>
          )}
      </ContainerNavActions>
    </ContainerHeader>
  );
}

export default Header;
