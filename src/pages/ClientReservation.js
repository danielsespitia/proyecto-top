import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClientReservationJSX } from '../components/ClientReservation/ClientReservationJSX';
import { getListReservation } from '../store/actions/ClientReservation.actions';

function ClientReservation () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListReservation())
  }, [getListReservation]);

  const data = useSelector(
    ({ clientReservationReducer: { ...state } } ) => {
      return { ...state }
    })

  return(
      <ClientReservationJSX
          data = {data}
      >
      </ClientReservationJSX>
  )
}

export default ClientReservation

