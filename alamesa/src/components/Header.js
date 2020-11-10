import Logo from "../image/Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerHeader = styled.header`
  display: flex;
  box-shadow: 0px 0px 4px 4px #707070;
  background-color: #f8f8f8;
  justify-content: space-between;
`;

const HeaderHome = styled.div`
  display: flex;
  width: 40vw;
  margin: 0 40px;
`;

const Img = styled.img`
  width: 50px;
`;

const HeaderHomeLogo = styled.figure`
  margin: 5px;
`;

const HeaderHomeSlogan = styled.h1`
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

const Anchor = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
`;

const AnchorSingIn = styled(Anchor)`
  background-color: #7741ff;
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
`;

const AnchorSingUp = styled(Anchor)`
  background-color: #0f31dd;
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
`;

function Header() {
  return (
    <ContainerHeader>
      <HeaderHome>
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
            <Anchor href="./">Restaurantes</Anchor>
          </NavigationMenuItem>
          <NavigationMenuItem className="navigation__menu-item sign-in">
            <AnchorSingIn href="./">Iniciar Sesion</AnchorSingIn>
          </NavigationMenuItem>
          <NavigationMenuItem className="navigation__menu-item sign-up">
            <AnchorSingUp href="./">Crear Cuenta</AnchorSingUp>
          </NavigationMenuItem>
        </NavigationMenu>
      </Navigation>
    </ContainerHeader>
  );
}

export default Header;
