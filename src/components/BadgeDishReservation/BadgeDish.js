import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  ContainerDish,
  ContainerButtons,
  IconDish, 
  ButtonAction,
  ButtonActionUp,
  ParragraphPrice,
  ParragraphQuantity,
  ParragraphNumber,
  Image,
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
        <Image 
          src={file}
          alt="Imagen del plato"
        />
      </figure>
      <div>
        <p>{nameDish}</p>
        <ParragraphPrice>{price}</ParragraphPrice>
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