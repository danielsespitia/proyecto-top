import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { 
  ContainerDish,
  ContainerButtons,
  IconDish, 
  ButtonAction,
  ButtonActionUp,
  ParragraphPrice,
  ParragraphQuantity,
  ParragraphNumber,
} from './BadgeStyles';

function BadgeDish({_id, nameDish, price, description, category, file}) {

  return(
    <ContainerDish>
      <div>
        <input 
          type="checkbox"
        />
      </div>
      <figure>
        <img 
          src={file || "https://res.cloudinary.com/alamesa/image/upload/v1610557814/UI/The_Munchies_Desserts_lhtlwx.svg"}
          alt="Imagen de previsualización del plato"
        />
      </figure>
      <div>
        <p>{nameDish || "Brownie"}</p>
        <ParragraphPrice>{price || "$8000"}</ParragraphPrice>
      </div>
      <ContainerButtons>
        <ButtonActionUp>
          <FontAwesomeIcon icon={"arrow-circle-up"}/>
        </ButtonActionUp>
        <ButtonAction>
          <FontAwesomeIcon icon={"arrow-circle-down"}/>
        </ButtonAction>
      </ContainerButtons>
      <div>
        <ParragraphQuantity>Cantidad</ParragraphQuantity>
        <ParragraphNumber>0</ParragraphNumber>
      </div>
      <IconDish icon={"utensils"}/>
    </ContainerDish>
  )
}

export default BadgeDish