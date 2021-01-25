import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  
  const MapStyles = {
    height: "40vh",
    width: "250px",
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }
  console.log(data)
  
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}>
      <GoogleMap
        mapContainerStyle={MapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map