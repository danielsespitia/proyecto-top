import { useContext, useState } from 'react';
import Logo from '../../image/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../store/AuthContext';
import { Link } from 'react-router-dom';
import { ModalProfile } from '../Modals/ModalProfile';
import {
  ContainerHeader,
  HeaderHome,
  Img,
  HeaderHomeLogo,
  HeaderHomeSlogan,
  NavigationMenu,
  NavigationMenuItem,
  ContainerNavActions,
  Navigation,
  Anchor,
  AnchorSignIn,
  AnchorSignUp,
  ContainerActions,
  AnchorProfile,
  AnchorLogout,
} from './HeaderStyles';



function Header() {
  const { isToken, logout, user } = useContext(AuthContext);
  
  const [click, setClick] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);

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
                to='/more'
                onClick={closeModalProfile}
                >
                <HeaderHomeLogo className="header__home-logo">
                  Profile
                  <FontAwesomeIcon icon="user-circle" />
                </HeaderHomeLogo>
              </AnchorProfile>
              {modalProfile && <ModalProfile/>}
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
