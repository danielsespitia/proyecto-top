import styled from 'styled-components'
import { ButtonEdit } from '../BadgeMenu/BadgeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 400px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: ${
    props => props.grayColorOverlay
  };
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

export const ModalProfileContainer = styled.ul`
  display: flex;
  flex-direction: column; 
  width: 150px;
  position: absolute;
  top: 23px;
  left: -40px;
  list-style: none;
`;

export const MenuItemModal = styled.li`
  background: ${
    props => props.theme.grayColorMore
  };
  &:hover {
    background: #5cabff;
  };
`;

export const MenuItemLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 16px;
`;

export const ModalBadgeMenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
`;

export const ContainerModalActions = styled.div`
  position: relative;
`;

export const ButtonCloseDish = styled.button`
  position: absolute;
  right: 7px;
  top: 5px;
  border: none;
  font-weight: 800;

  &:hover {
    background-color: ${
      props => props.theme.tertiaryColor
    };
  };
`;

export const ButtonDelete = styled(ButtonEdit)`
  background-color: ${
      props => props.theme.tertiaryColor
    };
  margin-left: 10px;

  &:hover {
    background-color: ${
      props => props.theme.tertiaryColorBlur
    };
    border: 1px solid ${
      props => props.theme.tertiaryColor
    };
  };
`;

export const EditIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  opacity: .6;
  color: #0f31dd;
  cursor: pointer;
`;