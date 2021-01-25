import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+bogota,+CA&key=${process.env.REACT_APP_API_KEY_GOOGLE_MAPS}`;

  async function getData() {
    const response = await axios(API)
      setMap(response.data.results[0].geometry.location)
    }
  
  useEffect(() => {
    getData()
  })

  if(map) {
    return map
  }
};

export default useGoogleAddress