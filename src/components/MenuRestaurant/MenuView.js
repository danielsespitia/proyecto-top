import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { resetDataExist } from '../../store/actions/Menu.action';

function MenuView() {

  const dispatch = useDispatch()
  
  const { dishesList } = useSelector(({ menuReducer: { dishesList}}) => ({ dishesList }))

  const [modalBadgeMenu, setModalBadgeMenu] = useState(false);

  const handleClick = () => {
    setModalBadgeMenu(true);
    dispatch(resetDataExist())
  }

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
        {!!dishesList && dishesList.length > 0 && dishesList.map(({_id, nameDish, price, description, category, file}, index) => {
          return (
            <BadgeMenu
              key={_id}
              id={_id}
              nameDish={nameDish}
              price={price}
              description={description}
              category={category}
              file={file}
              index={index}
            />
          )})}
        </BodyRight>
      </DesktopStructure>
    </>
  )
}

export default MenuView