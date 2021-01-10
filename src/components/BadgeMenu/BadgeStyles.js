import styled from 'styled-components';
import ButtonPrimary from '../styled/ButtonPrimary';

export const ContainerDetails = styled.article`
  width: 50vw;
  display: grid;
  grid-template-areas:
    "image dish dish"
    "image pricing edit";
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 17px;
`;

export const DetailsImage = styled.figure` 
  grid-area: image;
  height: 97px;
  border: 1px solid black;
  place-self: center;
  margin: 0;
  width: 10vw;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: inherit;
  height: inherit;
`;

export const DetailsDish = styled.span`
  grid-area: dish;
`;

export const DetailsPricing = styled.span`
  grid-area: pricing;
`;

export const DetailsEdit = styled.span`
  grid-area: edit;
  place-self: end;
  padding: 10px;
`;

export const DescriptionDish = styled.p`
  font-size: 14px;
`;

export const ButtonEdit = styled(ButtonPrimary)`
  width: fit-content;
  font-size: 14px;
  padding: 6px 25px;
`;

export const PricingCategory = styled(DescriptionDish)`
  font-weight: 800;
`;