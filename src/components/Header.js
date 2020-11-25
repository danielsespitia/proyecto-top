import { useContext } from 'react';
import Logo from '../image/Logo.png';
import { AuthContext } from '../store/AuthContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonPrimary from './styled/ButtonPrimary';

const ContainerHeader = styled.header`
  display: flex;
  box-shadow: 0px 0px 4px 4px #707070;
  background-color: #f8f8f8;
  justify-content: space-between;
`;

const HeaderHome = styled(Link)`
  display: flex;
  width: 40vw;
  margin: 0 40px;
  align-items: center;
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
  margin-right: 17px;
`;

const Navigation = styled.nav`
  margin-right: 40px;
  padding: 5px 0;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const AnchorSingIn = styled(ButtonPrimary)`
  background-color: ${
  props => props.theme.secundaryColor
  };

  &:hover {
    background-color: ${
      props => props.theme.secundaryColorBlur
    };
    border: 1px solid ${
      props => props.theme.secundaryColor
    };
  }
`;

const AnchorSingUp = styled(ButtonPrimary)`
  background-color: ${
  props => props.theme.primaryColor
  };
`;

function Header() {
  const { isAuthenticated } = useContext(AuthContext);

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
      <Navigation className="navigation">
        <NavigationMenu>
          <NavigationMenuItem className="navigation__menu-item restaurant">
            <Anchor to="/restaurants">Restaurantes</Anchor>
          </NavigationMenuItem>
          {isAuthenticated ? (
            <>
              <NavigationMenuItem className="navigation__menu-item sign-in">
                <AnchorSingIn as= {Link} to="/sign-in">Perfil</AnchorSingIn>
              </NavigationMenuItem>
              <NavigationMenuItem className="navigation__menu-item sign-up">
                <AnchorSingUp as= {Link} to="/sign-up">Cerrar sesión</AnchorSingUp>
              </NavigationMenuItem>
            </>
          ): (
            <>
              <NavigationMenuItem className="navigation__menu-item sign-in">
                <AnchorSingIn as= {Link} to="/sign-in">Iniciar sesión</AnchorSingIn>
              </NavigationMenuItem>
              <NavigationMenuItem className="navigation__menu-item sign-up">
                <AnchorSingUp as= {Link} to="/sign-up">Crear cuenta</AnchorSingUp>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenu>
      </Navigation>
    </ContainerHeader>
  );
}

export default Header;
