import {
  ContainerDetails,
  DetailsImage,
  Image,
  DetailsDish,
  DescriptionDish,
  DetailsPricing,
  PricingCategory,
  DetailsEdit,
  ButtonEdit,
} from '../BadgeMenu/BadgeStyles';
import {
  ModalBadgeMenuContainer,
  ContainerModalActions,
  ButtonCloseDish,
  EditIcon,
  ButtonDelete,
} from './ModalStyles';



function ModalBadgeMenu({handleClose}) {

  return (
    <ModalBadgeMenuContainer>
      <ContainerModalActions>
        <ButtonCloseDish onClick={handleClose}>
          cerrar
        </ButtonCloseDish>
        <ContainerDetails className="Container__details">
          <DetailsImage className="Container__details-image">
            <Image
              className="Details__image"
              src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1609867365/alamesa/The_Munchies_Dish_bmmydo.svg"
              alt="Imagen del plato"
            />
          </DetailsImage>
          <DetailsDish className="Container__Details-dish">
            <h4 className="Details__Name-dish">
              Nombre del plato
              <EditIcon icon="pen"/>
            </h4>
            <DescriptionDish className="Details__Description-dish">
              Descripción del plato
              <EditIcon icon="pen"/>
            </DescriptionDish>
          </DetailsDish>
          <DetailsPricing className="Container__Details-Pricing">
            <PricingCategory className="Type__Pricing-Category">
              Categoria
              <EditIcon icon="pen"/>
            </PricingCategory>
            <PricingCategory className="Type__Pricing-Price">
              Precio
              <EditIcon icon="pen"/>
            </PricingCategory>
          </DetailsPricing>
          <DetailsEdit className="Details__Type-Edit">
            <ButtonEdit as={"button"} className="Details__Type-Edit">Guardar</ButtonEdit>
            <ButtonDelete as={"button"} className="Details__Type-Edit">Eliminar</ButtonDelete>
          </DetailsEdit>
        </ContainerDetails>
      </ContainerModalActions>
    </ModalBadgeMenuContainer>
  )
}

export default ModalBadgeMenu