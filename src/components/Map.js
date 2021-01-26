import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  
  const MapStyles = {
    height: "40vh",
    width: "250px",
  }
  const latitud = parseFloat(data.lat)
  const longitud = parseFloat(data.lng)

  const defaultCenter = {
    lat: Number(latitud), lng: Number(longitud)
  }
  
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