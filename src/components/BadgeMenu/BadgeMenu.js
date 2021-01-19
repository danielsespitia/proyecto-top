import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ContainerDetails,
  DetailsImage,
  Image,
  DetailsDish,
  DetailsPricing,
  DetailsEdit,
  DescriptionDish,
  PricingCategory,
  ButtonEdit,
} from './BadgeStyles';
import ModalBadgeMenu from '../Modals/ModalBadgeMenu';
import { setDishId, cleanForm, } from '../../store/actions/Menu.action';

function BadgeMenu({ nameDish, price, description, category, file, id }) {

  const dispatch = useDispatch();

  const [modalBadgeMenu, setModalBadgeMenu] = useState(false);

  const handleClick = () => {
    setModalBadgeMenu(true);
    dispatch(setDishId(id))
  }

  const handleClose = () => {
    setModalBadgeMenu(false);
    dispatch(cleanForm())
  }

  return (
    <>
      <ContainerDetails className="Container__details">
      <DetailsImage className="Container__details-image">
        <Image
          className="Details__image"
          src={file}
          alt="Imagen del plato"
        />
      </DetailsImage>
      <DetailsDish className="Container__Details-dish">
        <h4 className="Details__Name-dish">{nameDish}</h4>
        <DescriptionDish className="Details__Description-dish">
          {description}
        </DescriptionDish>
      </DetailsDish>
      <DetailsPricing className="Container__Details-Pricing">
        <PricingCategory className="Type__Pricing-Category">
          {category}
        </PricingCategory>
        <PricingCategory className="Type__Pricing-Price">
          ${price}
        </PricingCategory>
      </DetailsPricing>
      <DetailsEdit className="Details__Type-Edit">
        <ButtonEdit 
          as={"button"} 
          className="Details__Type-Edit"
          onClick={handleClick}
        >
          Editar
        </ButtonEdit>
        {modalBadgeMenu ? ( 
          <ModalBadgeMenu 
            handleClose={handleClose}
            dishName={nameDish}
            priceRender={price}
            descriptionRender={description}
            categoryRender={category}
            fileRender={file}
          /> ) : (null)}
      </DetailsEdit>
    </ContainerDetails>
  </>
  )
} 

export default BadgeMenu