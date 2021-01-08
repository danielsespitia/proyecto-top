import {
  Image,
} from '../BadgeMenu/BadgeStyles';
import {
  ModalBadgeMenuContainer,
  ContainerModalActions,
  ButtonCloseDish,
  ButtonDelete,
  DetailsDishEdit,
  NameDish,
  EditIconName,
  DescriptionDish,
  EditIconDescription,
  DetailsPricingEdit,
  PricingEdit,
  EditIconPricing,
  ContainerDetailsEdit,
  LabelForImage,
  DetailsImageRender,
  LabelDish,
  LabelDescription,
  LabelCategory,
  ButtonSave,
  DetailsCategoryEdit,
} from './ModalStyles';



function ModalBadgeMenu({handleClose}) {

  return (
    <ModalBadgeMenuContainer>
      <ContainerModalActions>
        <ButtonCloseDish onClick={handleClose}>
          cerrar
        </ButtonCloseDish>
        <DetailsImageRender className="Container__details-image">
          <Image
            className="Details__image"
            src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1609867365/alamesa/The_Munchies_Dish_bmmydo.svg"
            alt="Imagen del plato"
          />
          </DetailsImageRender>
        <ContainerDetailsEdit 
          as={"form"}
          onSubmit={"handleSubmit"}
          className="Container__details">
            <input
              hidden
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={"handleChange"}
            />
            <LabelForImage htmlFor="image">Sube tu plato</LabelForImage>
          <DetailsDishEdit className="Container__Details-dish">
            <NameDish 
              className="Details__Name-dish"
              placeholder="Nombre del plato"
              type="text"
              name="nameDish"
              id="nameDish"
              value={"nameDish"}
              onChange={"handleChange"}
            />
            <LabelDish htmlFor="nameDish">
              <EditIconName icon="pen"/>
            </LabelDish>
            <DescriptionDish className="Details__Description-dish"
              placeholder="Descripción del plato"
              type="text"
              name="description"
              id="description"
              value={"description"}
              onChange={"handleChange"}
            />
            <LabelDescription htmlFor="description">
              <EditIconDescription icon="pen"/>
            </LabelDescription>
          </DetailsDishEdit>
          <DetailsCategoryEdit className="Container__Details-Pricing">
            <PricingEdit className="Type__Pricing-Category"
              placeholder="Categoria"
              type="text"
              name="category"
              id="category"
              value={"category"}
              onChange={"handleChange"}
            />
            <LabelCategory htmlFor="category">
              <EditIconPricing icon="pen"/>
            </LabelCategory>
          </DetailsCategoryEdit>
          <DetailsPricingEdit>
            <PricingEdit className="Type__Pricing-Price"
              placeholder="Precio"
              type="number"
              name="price"
              id="price"
              value={"price"}
              onChange={"handleChange"}
            />
          </DetailsPricingEdit>
          <ButtonSave as={"button"} className="Details__Type-Edit">Guardar</ButtonSave>
          <ButtonDelete as={"button"} className="Details__Type-Edit">Eliminar</ButtonDelete>
        </ContainerDetailsEdit>
      </ContainerModalActions>
    </ModalBadgeMenuContainer>
  )
}

export default ModalBadgeMenu