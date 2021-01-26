import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClientReservationJSX } from '../components/ClientReservation/ClientReservationJSX';
import { getListReservation } from '../store/actions/ClientReservation.actions';

function ClientReservation () {
  const dispatch = useDispatch();

  const data = useSelector(
    ({ clientReservationReducer: { ...state } } ) => {
      return { ...state }
    });

  useEffect(() => {
    dispatch(getListReservation())
  }, [data.reservationData.length, dispatch]);


  return(
      <ClientReservationJSX
          data = {data}
      >
      </ClientReservationJSX>
  )
}

export default ClientReservation

