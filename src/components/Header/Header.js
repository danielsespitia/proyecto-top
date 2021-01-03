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
  ContainerSearch,
  InputSearch,
  ContainerInputSearch,
  SearchBar,
} from './HeaderStyles';




function Header() {
  const { isToken, logout, } = useContext(AuthContext);
  
  const [modalProfile, setModalProfile] = useState(false);

  const handleClick = () => setModalProfile(true);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setModalProfile(false);
    } else {
      setModalProfile(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setModalProfile(false);
    } else {
      setModalProfile(false);
    }
  };

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
              <NavigationMenuItem
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={handleClick}
                >
                <AnchorProfile 
                  as={Link} 
                >
                    Profile
                  <HeaderHomeLogo className="header__home-logo">
                    <FontAwesomeIcon icon="user-circle" />
                  </HeaderHomeLogo>
                </AnchorProfile>
                {modalProfile && <ModalProfile/>}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <AnchorLogout as={Link} to="/" onClick={logout}>Cerrar sesión</AnchorLogout>
              </NavigationMenuItem>
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
      <ContainerSearch>
        <ContainerInputSearch>
          <InputSearch
            type="text"
            className="header__search"
            placeholder="Buscar un restaurante"
            // value={query}
            // onChange={(e) => {
            //   getSuggestedQuery(e.target.value)
            // }}
          />
          <SearchBar icon="search"/>
        </ContainerInputSearch>
      </ContainerSearch>
    </ContainerHeader>
  );
}

export default Header;
