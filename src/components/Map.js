import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  
  const MapStyles = {
    height: "40vh",
    width: "250px",
  }

  const defaultCenter = {
    lat: 4.639432364013056, lng: -74.08183585260386
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