import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
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
  }, [data.reservationData.length]);


  return(
      <ClientReservationJSX
          data = {data}
      >
      </ClientReservationJSX>
  )
}

export default ClientReservation

