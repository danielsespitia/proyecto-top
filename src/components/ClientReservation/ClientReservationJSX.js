import { useDispatch } from 'react-redux';
import { getDeleteReservation } from '../../store/actions/ClientReservation.actions';
import Desktopstructure from '../styled/DesktopStructure';
import { faCommentDots, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import PageLoading from '../PageLoading';
import {
  BodyLeft,
  BodyRight,
  Select,
  ImageDecor,
  H1,
  Filter,
  Booking,
  ButtonTracker,
  ButtonChat,
  InfoBooking,
  ShowBooking,
  ButtonCancel,
  ImgRestaurant,
  DataRestaurant,
  Name,
  Address,
  Date
} from './ClientReservationStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ClientReservationJSX ({ data }) {
  const dispatch = useDispatch();

  const handleDeleteReservation = (e, idReservation, index) => {
    e.preventDefault();
    dispatch(getDeleteReservation(idReservation, index))
  };

  if(data.loading) {
    return(
      <PageLoading/>
    )
  };

  return(
    <>
      <H1> Mis Reservas  </H1>
      <Filter>
        <label> Fecha de mi reservación: </label>
        <Select
          id="filterByDate"
          name="filterByDate"
        >
          <option value = "week"> Semana </option>
          <option value = "month"> Mes </option>
          <option value = "year"> Año </option>
        </Select>
      </Filter>
      <Desktopstructure>
        <BodyLeft>
         <ImageDecor
          src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-waiter-serving-vector-modern-waiter-reserved-table-in-cafe-restaurant-flat-png-image_5205007.jpg"
          alt="Imagen decoración"
        />
        </BodyLeft>
        <BodyRight>
          {!!data &&
          !!data.reservationData &&
          !!data.reservationData.reservations &&
          data.reservationData.reservations.length > 0 &&
          data.reservationData.reservations.map((reservation, index) => {
            return(
              <Booking
                key= {reservation._id}
              >
                <ButtonTracker>
                  <FontAwesomeIcon icon={faMapMarkedAlt}/>
                </ButtonTracker>
                <ButtonChat 
                  href="https://wa.link/x05ku4"
                  target="_blank"
                >
                    <FontAwesomeIcon icon={faCommentDots}/>
                </ButtonChat>
                <InfoBooking>
                  <ImgRestaurant
                    src= "https://png.pngtree.com/png-clipart/20190515/original/pngtree-winner-winner-chicken-dinner-badge-for-pubg-game-png-image_3724929.jpg"
                    alt= "restaurante"
                  />
                  <DataRestaurant>
                    <Name>{reservation.provider.name}</Name>
                    <Address>{reservation.provider.address}</Address>
                    <Date>{reservation.date};  {reservation.time}</Date>
                  </DataRestaurant>
                </InfoBooking>
                <ShowBooking>Ver reserva</ShowBooking>
                <ButtonCancel
                  onClick = { e => handleDeleteReservation(e, reservation._id, index)}
                >Cancelar</ButtonCancel>
              </Booking>
            )
          })}
        </BodyRight>
      </Desktopstructure>
    </>
  )
}
