import { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import DesktopStructure from '../components/styled/DesktopStructure';
import { BodyLeft } from '../components/MenuRestaurant/MenuStyles';
import ContainerContent from '../components/styled/ContainerContent';
import { ResponseComponent } from '../components/ResponseEpayco/ResponseReservation';

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

  useEffect(() => {
    const { ref_payco } = queryString(location.search)
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_PAYMENT_URL,
      url: `/validation/v1/reference/${ref_payco}`
    })
      .then(({ data }) => {
        setResponseEpayco(data)
      })
  }, [location])

  return (
    <DesktopStructure>
      <BodyLeft>
        <h4>Ubicación</h4>
        <img
          src="https://res.cloudinary.com/alamesa/image/upload/v1610834913/UI/mapsvg_y2isgv.svg"
          alt="Here put the map"
        />
      </BodyLeft>
      <BodyResponse>
        <ResponseComponent/>
      </BodyResponse>
    </DesktopStructure>
  )
};