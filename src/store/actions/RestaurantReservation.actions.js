import axios from 'axios';
import swal from 'sweetalert';

import {
    RESERVATION_LOADING,
    RESERVATION_FAILURE,
    RESERVATION_DATA,
    RESERVATION_FINISHED,
    RESERVATION_DELETE,
} from '../reducers/RestaurantReservation.reducer';

export function getReservationData (payload) {
    return function (dispatch) {
        dispatch({ RESERVATION_DATA, payload })
    }
};

export function getReservationsList() {
    return async function (dispatch) {
        const token = localStorage.getItem('token')
        dispatch({ type: RESERVATION_LOADING })
        try {
            const { data: {data} } = await axios ({
                method: 'GET',
                baseURL: process.env.REACT_APP_SERVER_URL,
                url: 'restaurants/reservations',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            dispatch({ type: RESERVATION_DATA, payload: data })
        } catch(error) {
            dispatch({ type: RESERVATION_FAILURE, payload: error })
        } finally {
            dispatch({ type: RESERVATION_FINISHED })
        }
    }
}

export function deleteReservation(reservationId, index) {
    return async function (dispatch) {
        await swal("¿Estás seguro que quieres cancelar esta reserva?", {
            buttons: {
              regret: "No, no quiero cancelarla",
              destroy: {
                text: "Sí",
                value: "destroy",
              },
            },
          })
          .then(async (value) => {
            switch (value) {
              case "regret":
                swal("La reserva no fue cancelada");
                break;
              case "destroy":
                try{
                const token = localStorage.getItem('token')
                await axios({
                method: 'DELETE',
                baseURL: process.env.REACT_APP_SERVER_URL,
                url: `reservations/${reservationId}`,
                headers: {
                Authorization: `Bearer ${token}`,
                },
                });
                swal("Reserva cancelada", "", "success");
                dispatch({ type: RESERVATION_DELETE, payload: index})
                } catch(err){
                  swal("La reserva no pudo ser cancelada", "", "error");
                }
                break;
              default:
                swal("La reserva sigue en pie");
            }
        }
    )};
    }