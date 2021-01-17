import { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import DesktopStructure from '../components/styled/DesktopStructure';
import { BodyLeft } from '../components/MenuRestaurant/MenuStyles';
import ContainerContent from '../components/styled/ContainerContent';
import { ResponseComponent } from '../components/ResponseEpayco/ResponseReservation';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

function queryString(query) {
  const res = {}
  query
    .replace('?', '')
    .split('&')
    .forEach(q => {
      const [key, value] = q.split('=')
      res[key] = value
    })
  return res
}

const BodyResponse = styled(ContainerContent)`
  width: fit-content;
  margin: 0;
`;

export function Response({ location }) {

  const [responseEpayco, setResponseEpayco] = useState({});
  const locationClient = useGoogleAddress('parkway')

  console.log(locationClient)

  useEffect(() => {
    const { ref_payco } = queryString(location.search)
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_PAYMENT_URL,
      url: `/validation/v1/reference/${ref_payco}`
    })
      .then(({ data: {data} }) => {
        setResponseEpayco(data)
      })
  }, [location])

  const { x_amount, x_response, x_id_factura } = responseEpayco

  const dataRestaurantJson = localStorage.getItem('ReservationData');
  var dataRestaurant = JSON.parse(dataRestaurantJson);

  return (
    <DesktopStructure>
      <BodyLeft>
        <h4>Ubicación</h4>
        <Map data={locationClient}/>
      </BodyLeft>
      <BodyResponse>
        <ResponseComponent
          amount={x_amount}
          response={x_response}
          billing={x_id_factura}
          nameRestaurant={dataRestaurant.name}
          time={dataRestaurant.time}
          date={dataRestaurant.date}
        />
      </BodyResponse>
    </DesktopStructure>
  )
};