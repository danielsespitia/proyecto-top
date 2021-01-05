import DesktopStructure from '../styled/DesktopStructure';
import {
  ContainerAbout,
  BodyRight,
  BodyLeft,
} from './MenuStyles';

function MenuForm() {
  return (
    <>
      <ContainerAbout className="Container__About">
        <h3>Mi carta</h3>
        <p>A continuacion podras ver y editar el menu de tu carta, recuerda que esta sera vista por tus clientes cuando entren a tu perfil para hacer una reserva</p>
      </ContainerAbout>
      <button className="Button__Add-dish">
        Añadir nuevo plato
      </button>
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
          <article>
            <figure>
              <img
                src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1609867365/alamesa/The_Munchies_Dish_bmmydo.svg"
                alt="Imagen del plato"
              />
            </figure>
            <span>
              <h4>Nombre del plato</h4>
              <p>Descripción del plato</p>
            </span>
            <span>
              <span>
                <p>Categoria</p>
                <p>Precio</p>
              </span>
              <button>Editar</button>
            </span>
          </article>
        </BodyRight>
      </DesktopStructure>
    </>
  )
}

export default MenuForm