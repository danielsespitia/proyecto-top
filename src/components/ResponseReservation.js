import { useEffect, useState } from 'react';
import axios from 'axios'

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

export function Response({ location }) {

  const [responseEpayco, setResponseEpayco] = useState({});

  useEffect(() => {
    const { ref_payco } = queryString(location.search)
    console.dir()
    axios({
      method: 'GET',
      baseURL: 'https://api.secure.payco.co',
      url: `/validation/v1/reference/${ref_payco}`
    })
      .then(({ data }) => {
        setResponseEpayco(data)
      })
  }, [location])

  return <p>Repuesta de la transacción</p>
};