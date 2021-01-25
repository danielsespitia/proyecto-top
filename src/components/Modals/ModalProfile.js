import { useState, useContext, } from 'react';
import { AuthContext } from '../../store/AuthContext'
import {
  ModalProfileContainer,
  MenuItemModal,
  MenuItemLink,
} from './ModalStyles'

export function ModalProfile(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { user } = useContext(AuthContext);
  const pathUser = localStorage.getItem('pathUser');

  return (
    <ModalProfileContainer
      onClick={handleClick}
      className='modal-profile'
    >
      <MenuItemModal>
      { (pathUser === "/client-profile") ? (
        <MenuItemLink 
          to='/client-reservation'
          onClick={() => setClick(false)}
        >
          Mis reservas
        </MenuItemLink>
          ) : (
        <MenuItemLink 
          to='/restaurant-profile/reservations'
          onClick={() => setClick(false)}
        >
          Mis reservas
        </MenuItemLink>
      )}
      </MenuItemModal>
      <MenuItemModal>
        <MenuItemLink 
          to={user}
          onClick={() => setClick(false)}
        >
          Mi perfil
        </MenuItemLink>
      </MenuItemModal>
    </ModalProfileContainer>
  )
}