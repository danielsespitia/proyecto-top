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

  return (
    <ModalProfileContainer
      onClick={handleClick}
      className='modal-profile'
    >
      <MenuItemModal>
        <MenuItemLink 
          to='/reservas'
          onClick={() => setClick(false)}
        >
          Mis reservas
        </MenuItemLink>
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