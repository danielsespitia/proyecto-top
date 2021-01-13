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
  Message,
} from './ModalStyles';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect, useState } from 'react';
import { 
  setCategory, 
  setDescription, 
  setImage, 
  setNameDish, 
  setPrice, 
  createDish, 
  getDataDish,
  updateData,
  deleteData,
  cleanForm,
} from '../../store/actions/Menu.action';



function ModalBadgeMenu({handleClose}) {

  const [imageRender, setImageRender] = useState(null);

  const dispatch = useDispatch();
  
  const data = useSelector((
    { menuReducer: {
      ...state
    }}) => {
      return { ...state }
  })
    
  const { nameDish, description, price, category, file, message, dishId, dataDishExist, loading, errorMessage } = data;

  useEffect(() => {
    if(dataDishExist) { 
      dispatch(getDataDish(dishId))
      setImageRender(file)
    }
      return()  => {
      dispatch(cleanForm())
    }
  }, [dishId])
    
  const readFile = (image) => {
  const reader = new FileReader();

  reader.onload = e => setImageRender(e.target.result)

  reader.readAsDataURL(image) 
  };

  const handleChange = (e)  => {
    const { name, value, files} = e.target;
    switch(name) {
      case 'file':
        dispatch(setImage(files[0]))
        readFile(files[0])
        break;
      case 'nameDish':
        dispatch(setNameDish(value))
        break;
      case 'description':
        dispatch(setDescription(value))
        break;
      case 'price':
        dispatch(setPrice(value))
        break;
      case 'category':
        dispatch(setCategory(value))
        break;
      default: break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataSend = new FormData();
    dataSend.append('nameDish', nameDish)
    dataSend.append('description', description)
    dataSend.append('price', price)
    dataSend.append('category', category)
    if(file) {
      dataSend.append('file', file)
    }
    if(!dataDishExist) { 
      dispatch(createDish(dataSend))
    }
    else { 
      dispatch(updateData(dataSend, dishId))
    }
  };

  const handleDelete = (e) => {
    e.preventDefault()

    dispatch(deleteData(dishId))
  };

  if(loading) return ( <p>Loading...</p>)

  return (
    <ModalBadgeMenuContainer>
      <ContainerModalActions>
        <ButtonCloseDish onClick={handleClose}>
          cerrar
        </ButtonCloseDish>
          <DetailsImageRender className="Container__details-image">
          {!!imageRender && (
            <Image
            className="Details__image"
            src={imageRender}
              alt="Imagen del plato"
            />
          )}
          </DetailsImageRender>
        <ContainerDetailsEdit 
          onSubmit={handleSubmit}
          className="Container__details">
            <input
              hidden
              type="file"
              accept="image/*"
              name="file"
              id="file"
              onChange={handleChange}
            />
            <LabelForImage htmlFor="file">Sube tu plato</LabelForImage>
          <DetailsDishEdit className="Container__Details-dish">
            <NameDish 
              className="Details__Name-dish"
              placeholder="Nombre del plato"
              type="text"
              name="nameDish"
              id="nameDish"
              value={nameDish}
              onChange={handleChange}
              />
            <LabelDish htmlFor="nameDish">
              <EditIconName icon="pen"/>
            </LabelDish>
            <DescriptionDish className="Details__Description-dish"
              placeholder="Descripción del plato"
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
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
              value={category}
              onChange={handleChange}
            />
            <LabelCategory htmlFor="category">
              <EditIconPricing icon="pen"/>
            </LabelCategory>
          </DetailsCategoryEdit>
          <DetailsPricingEdit>
            <PricingEdit className="Type__Pricing-Price"
              placeholder="Precio"
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={handleChange}
              />
          </DetailsPricingEdit>
          <Message>{message || errorMessage}</Message>
          <ButtonSave as={"button"} type="submit" className="Details__Type-Edit">Guardar</ButtonSave>
          <ButtonDelete as={"button"} onClick={handleDelete} className="Details__Type-Edit">Eliminar</ButtonDelete>
        </ContainerDetailsEdit>
      </ContainerModalActions>
    </ModalBadgeMenuContainer>
  )
}

export default ModalBadgeMenu