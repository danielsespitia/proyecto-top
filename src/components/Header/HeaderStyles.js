import styled from 'styled-components';
import ButtonPrimary from '../styled/ButtonPrimary';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContainerHeader = styled.header`
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  box-shadow: 0px 0px 4px 4px #707070;
  background-color: #f8f8f8;
`;

export const HeaderHome = styled(Link)`
  display: flex;
  width: 40vw;
  margin: 0 40px;
  align-items: center;
  justify-content: flex-start;
`;

export const Img = styled.img`
  width: 40px;
`;

export const HeaderHomeLogo = styled.figure`
  margin: 0 7px;
  display: inline-block;
`;

export const HeaderHomeSlogan = styled.h2`
  margin: 5px;
`;

export const NavigationMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0;
`;

export const NavigationMenuItem = styled.li`
  margin-right: 0px;
`;

export const ContainerNavActions = styled.div` 
  display: flex;
  justify-content: flex-end;
`;

export const Navigation = styled.nav`
  margin-right: 17px;
  padding: 5px 0;
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const AnchorSignIn = styled(ButtonPrimary)`
  background-color: ${props => props.theme.secundaryColor
  };
  
  margin-right: 17px;

  &:hover {
    background-color: ${props => props.theme.secundaryColorBlur};
    border: 1px solid ${props => props.theme.secundaryColor};
  };
`;

export const AnchorSignUp = styled(ButtonPrimary)`
  background-color: ${props => props.theme.primaryColor
  };
  margin-right: 40px;
`;

export const ContainerActions = styled(NavigationMenu)`
  display: flex;
  align-items: center;
`;

export const AnchorProfile = styled(Anchor)`
  margin-right: 17px;
  &:hover {
    background-color: ${
      props => props.theme.secundaryColorBlur
    };
    border-radius: 4px;
    transition: all 0.2s ease-out;
  };
`;

export const AnchorLogout = styled(ButtonPrimary)`
  background-color: ${props => props.theme.primaryColorBlur
  };
  margin-right: 40px;
`;

export const ContainerSearch = styled(ContainerNavActions)`
  align-items: center;
  margin-right: 24px;
  justify-content: none;
`;

export const InputSearch = styled.input`
  border: none;
  border-radius: 5px;
  width: 190px;
  height: 24px;
  padding: 6px 15px;
  align-items: center;

  &:focus {
    border-color: ${props => props.theme.secundaryColorBlur};
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.0125), 0 0 8px rgba(34,139,230,0.5);
    transition: all .1s ease-in-out;
  };
`;

export const ContainerInputSearch = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const SearchBar = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  opacity: .6;
  color: ${props => props.theme.secundaryColor};
`;