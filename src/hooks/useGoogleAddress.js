import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY_GOOGLE_MAPS
const useGoogleAddress = address => {
  const [map, setMap] = useState(null);
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+bogota+View,+CA&key=${KEY}`;

  useEffect(() => {
    async function getData() {
      const response = await axios(API)
      setMap(response.data.results[0].geometry.location)
    }
    getData()
  },[API])

  return map
};

export default useGoogleAddress