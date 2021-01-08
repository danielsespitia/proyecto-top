import styled from 'styled-components'
import { 
  ButtonEdit, 
  DetailsPricing, 
  DetailsDish,
  DetailsEdit,
  ContainerDetails,
  DetailsImage,
} from '../BadgeMenu/BadgeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 400px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: ${
    props => props.grayColorOverlay
  };
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

export const ModalProfileContainer = styled.ul`
  display: flex;
  flex-direction: column; 
  width: 150px;
  position: absolute;
  top: 23px;
  left: -40px;
  list-style: none;
`;

export const MenuItemModal = styled.li`
  background: ${
    props => props.theme.grayColorMore
  };
  &:hover {
    background: #5cabff;
  };
`;

export const MenuItemLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 16px;
`;

export const ModalBadgeMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
`;

export const ContainerModalActions = styled.div`
  position: absolute;
`;

export const ButtonCloseDish = styled.button`
  position: absolute;
  right: 7px;
  top: 5px;
  border: none;
  font-weight: 800;

  &:hover {
    background-color: ${
      props => props.theme.tertiaryColor
    };
  };
`;

export const EditIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  opacity: .6;
  color: #0f31dd;
  cursor: pointer;
`;

export const DetailsDishEdit = styled(DetailsDish)`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

export const NameDish = styled.input`
  width: 250px;
  border: none;
  border-radius: 7px;
  padding: 8px 15px;

  &:focus {
    border-color: rgba(15,49,221,0.5);
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.0125), 0 0 8px rgba(34,139,230,0.5);
    transition: all .1s ease-in-out;
  };
`;

export const EditIconName = styled(EditIcon)`
  position: relative;
  top: 2px;
`;

export const LabelDish = styled.label`
  position: relative;
  top: -28px;
  left: 242px;
  width: fit-content;
`;

export const DescriptionDish = styled(NameDish)`
  height: 60px;
  padding: 0 15px 8px 15px;
  margin-top: 15px;
`;

export const EditIconDescription = styled(EditIconName)`
  top: 2px;
  right: 0;
`;

export const LabelDescription = styled(LabelDish)`
  top: -43px;
  left: 241px;
`;

export const DetailsCategoryEdit = styled.span`
  grid-area: category;
  padding: 10px 30px 0 30px;
`;

export const DetailsPricingEdit = styled(DetailsPricing)`
  padding: 10px 30px;
`;

export const PricingEdit = styled(NameDish)`
  border: none;
  border-radius: 7px;
  padding: 8px 15px;
  margin-bottom: 15px;
`;

export const LabelCategory = styled(LabelDish)`
  top: 0;
  left: -3px;
`;

export const EditIconPricing = styled(EditIcon)`
  position: relative;
  right: 35px;
`;

export const DetailsActionsEdit = styled(DetailsEdit)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  place-self: revert;
`;

export const ContainerDetailsEdit = styled(ContainerDetails)`
  padding: 15px;
  grid-template-areas:
    "image dish dish"
    "image category category"
    "file pricing pricing"
    "file save delete";
`;

export const LabelForImage = styled.label`
  background-color: indigo;
  color: white;
  padding: 6px;
  border-radius: 7px;
  cursor: pointer;
  grid-area: file;
  place-self: baseline;
`;

export const DetailsImageRender = styled(DetailsImage)`
  position: absolute;
  top: 79px;
  left: 20px;
`;

export const ButtonSave = styled(ButtonEdit)`
  grid-area: save;
`;

export const ButtonDelete = styled(ButtonEdit)`
  grid-area: delete;
  background-color: ${
      props => props.theme.tertiaryColor
    };

  &:hover {
    background-color: ${
      props => props.theme.tertiaryColorBlur
    };
    border: 1px solid ${
      props => props.theme.tertiaryColor
    };
  };
`;