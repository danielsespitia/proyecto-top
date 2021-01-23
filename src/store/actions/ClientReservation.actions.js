import axios from 'axios';
import swal from 'sweetalert';

import { 
  RESERVATION_LOADING,
  RESERVATION_FAILURE,
  RESERVATION_DATA,
  RESERVATION_FINISHED,
  RESERVATION_DELETE,
} from '../reducers/ClientReservation.reducer'

export function getReservationData ( payload ) {
  return function ( dispatch ) {
    dispatch({ RESERVATION_DATA, payload })
  }
}
export function getListReservation() {
  return async function ( dispatch ) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESERVATION_LOADING })
    try{
      const { data: {data} } = await axios ({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/clients/reservations',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: RESERVATION_DATA, payload: data })
    }catch(error) {
      dispatch({ type: RESERVATION_FAILURE, payload: error })
    }finally{
      dispatch({ type: RESERVATION_FINISHED })
    }
  }
}

export function getDeleteReservation(idReservation, index){
  return async function ( dispatch ) { 
    await swal("¿Quiere cancelar la reserva?", {
      buttons: {
        regret: "No, quiero disfrutarla",
        destroy:{
          text: "Si",
          value: "destroy",
        },
      },
    })
    .then (async (value) => {
      switch (value) {
        case "cancel":
          swal("Nos alegra que sigas con nosotros");
          break;

          case "destroy":
            try{
              const token = localStorage.getItem('token')
              await axios({
                method: 'DELETE',
                baseURL: process.env.REACT_APP_SERVER_URL,
                url: `reservations/${idReservation}`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              swal("Reserva cancelada exitosamente","","success");
              dispatch({ type: RESERVATION_DELETE, payload: index})
            }catch(err){
              swal("Tu reserva no pudo ser cancelada","","error");
            }
            break;
          default:
            swal("Gracias por no cancelar la reserva, que la disfrutes");
      }
    });
  }
}