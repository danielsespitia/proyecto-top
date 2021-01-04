import styled from 'styled-components'
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