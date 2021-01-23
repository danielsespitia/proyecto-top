import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActiveReservations from '../components/ActiveReservations';
import PendingReservations from '../components/PendingReservations';
import { getReservationsList } from '../store/actions/RestaurantReservation.actions';
import styled from 'styled-components';
import DesktopStructure from '../components/styled/DesktopStructure';

const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ImageHolder = styled.img `
  width: 20rem;
  margin: auto;
`;

const BodyRight = styled.div ` 
  justify-content: center;
  grid-area: bodyRight;
  padding: 50px 60px;
  border-radius: 10px;
`;

const ReservationsContainer = styled.div `
  justify-content: center;
  margin-left: 10rem;
`

const H1 = styled.h1 `
  text-align: center;
  text-decoration: underline;
`;

const ActiveP = styled.p `
  font-size: 28px;
  color: #D373D0;
`;

const PendingP = styled.p `
  font-size: 28px;
  color: #E1B5E8;
`;

function RestaurantReservations () {

  const dispatch = useDispatch();

  const data = useSelector(
    ({ restaurantReservationReducer: {
      ...state
    }}) => {
      return { ...state }
    })
    
    useEffect(() => {
      dispatch(getReservationsList())
    }, [data.reservationData.length]);

  return (
    <DesktopStructure>
      <BodyLeft>
        <ImageHolder 
          src="https://www.npg.org.uk/assets/images/Slideshows/food/571_restaurant_1.jpg"
          alt="left"
        />
      </BodyLeft>
      <BodyRight>
        <ReservationsContainer>
          <H1>Mis Reservas</H1>
          <ActiveP><strong>Activas</strong></ActiveP>
          <ActiveReservations 
            data = { data }
          />
        </ReservationsContainer>
      </BodyRight>
    </DesktopStructure>
  )
} 

export default RestaurantReservations