import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ActiveReservations  from '../components/ActiveReservations';
import PendingReservations from '../components/PendingReservations';
import profilePicture from '../image/ProfilePicture.png';
import styled from 'styled-components'
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

const activeReservationData = [
  {
    id: uuidv4(),
    clientProfilePicture: profilePicture,
    clientName: 'Pedro Perez',
    phone: '3235640231',
    reservationDate: '27/11/2020',
    timeFrom: '17:00',
    timeTo: '17:45',
    timestamp: '25/11/2020',
  },
  {
    id: uuidv4(),
    clientProfilePicture: profilePicture,
    clientName: 'Maria Lopez',
    phone: '3245674321',
    reservationDate: '30/11/2020',
    timeFrom: '15:00',
    timeTo: '17:30',
    timestamp: '28/11/2020',
  },
];

const pendingReservationData = [
  {
    id: uuidv4(),
    clientProfilePicture: profilePicture,
    clientName: 'Jessi Uribe',
    phone: '3253472131',
    reservationDate: '02/12/2020',
    timeFrom: '12:00',
    timeTo: '17:00',
    timestamp: '30/11/2020',
  }
]

class RestaurantReservations extends Component {

state = {
  activeData: activeReservationData,
  pendingData: pendingReservationData
}

render () {
  const { activeData } = this.state
  const { pendingData } = this.state

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
          {!!activeData && activeData.map(({ id, clientProfilePicture, clientName, phone, reservationDate, timeFrom, timeTo, timestamp }) => {
            return (
              <>
                <ActiveReservations 
                  key={id}
                  clientProfilePicture={clientProfilePicture}
                  clientName={clientName}
                  phone={phone}
                  reservationDate={reservationDate}
                  timeFrom={timeFrom}
                  timeTo={timeTo}
                  timestamp={timestamp}
                />
              </>
              )
            })}
            <PendingP><strong>Pendientes</strong></PendingP>
            {!!pendingData && pendingData.map(({ id, clientProfilePicture, clientName, phone, reservationDate, timeFrom, timeTo, timestamp }) => {
            return (
              <>
                <PendingReservations 
                  key={id}
                  clientProfilePicture={clientProfilePicture}
                  clientName={clientName}
                  phone={phone}
                  reservationDate={reservationDate}
                  timeFrom={timeFrom}
                  timeTo={timeTo}
                  timestamp={timestamp}
                />
              </>
              )
            })}
        </ReservationsContainer>
      </BodyRight>
    </DesktopStructure>
  )
}
}

export default RestaurantReservations