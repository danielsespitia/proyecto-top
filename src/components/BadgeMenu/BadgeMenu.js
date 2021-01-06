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

function BadgeMenu() {
  return (
    <>
      <ContainerDetails className="Container__details">
      <DetailsImage className="Container__details-image">
        <Image
          className="Details__image"
          src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1609867365/alamesa/The_Munchies_Dish_bmmydo.svg"
          alt="Imagen del plato"
        />
      </DetailsImage>
      <DetailsDish className="Container__Details-dish">
        <h4 className="Details__Name-dish">Nombre del plato</h4>
        <DescriptionDish className="Details__Description-dish">
          Descripción del plato
        </DescriptionDish>
      </DetailsDish>
      <DetailsPricing className="Container__Details-Pricing">
        <PricingCategory className="Type__Pricing-Category">
          Categoria
        </PricingCategory>
        <PricingCategory className="Type__Pricing-Price">
          Precio
        </PricingCategory>
      </DetailsPricing>
      <DetailsEdit className="Details__Type-Edit">
        <ButtonEdit as={"button"} className="Details__Type-Edit">Editar</ButtonEdit>
      </DetailsEdit>
    </ContainerDetails>
  </>
  )
} 

export default BadgeMenu