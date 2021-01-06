import { useState } from 'react';
import DesktopStructure from '../styled/DesktopStructure';
import {
  ContainerAbout,
  BodyRight,
  BodyLeft,
  ButtonAddDish,
  AddIcon,
} from './MenuStyles';
import BadgeMenu from '../BadgeMenu/BadgeMenu';
import ModalBadgeMenu from '../Modals/ModalBadgeMenu';

function MenuForm() {

  const [modalBadgeMenu, setModalBadgeMenu] = useState(false);

  const handleClick = () => setModalBadgeMenu(true);

  const handleClose = () => setModalBadgeMenu(false);

  return (
    <>
      <ContainerAbout className="Container__About">
        <h3>Mi carta</h3>
        <p>A continuacion podras ver y editar el menu de tu carta, recuerda que esta sera vista por tus clientes cuando entren a tu perfil para hacer una reserva</p>
      </ContainerAbout>
      <ButtonAddDish 
        as={"button"} 
        className="Button__Add-dish"
        onClick={handleClick}
      >
        <AddIcon icon="plus"/>
        Añadir nuevo plato
      </ButtonAddDish>
      {modalBadgeMenu ? ( <ModalBadgeMenu handleClose={handleClose}/> ) : (null)}
      <DesktopStructure className="Container__Main-content">
        <BodyLeft className="Container__Left">
          <figure className="Container__left-figure">
            <img
              className="Container__left-img"
              src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1609867156/alamesa/coverMenu_mbnleh.svg"
              alt="Foto de cover para entregar un mejor UX"
            />
          </figure>
        </BodyLeft>
        <BodyRight className="Container__right">
          <BadgeMenu/>
        </BodyRight>
      </DesktopStructure>
    </>
  )
}

export default MenuForm