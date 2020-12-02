import { useDispatch } from 'react-redux';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../store/AuthContext'
import Desktopstructure from '../components/styled/DesktopStructure';
import RestProfile  from '../components/RestProfile';
import { GET_RESTAURANT_NAME, GET_RESTAURANT_EMAIL, GET_RESTAURANT_ADDRESS, GET_RESTAURANT_PHONE, GET_RESTAURANT_SCHEDULEFROM, GET_RESTAURANT_SCHEDULETO, GET_RESTAURANT_DEPOSIT, GET_RESTAURANT_NIT } from '../store';
 
const RestLogo = styled.img `
  width: 100px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BodyRight = styled.div ` 
  grid-area: bodyRight;
  text-align: center;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

const MyOfficesAnchor = styled.a`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;
  
function RestaurantProfile() {
    
  const [ id, setId ] = useState(''); 
  const [ restaurantName, setRestaurantName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ scheduleFrom, setScheduleFrom ] = useState('');
  const [ scheduleTo, setScheduleTo ] = useState('');
  const [ deposit, setDeposit ] = useState(20000)
  const [ nit, setNit ] = useState('');
  const { logout } = useContext(AuthContext);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios({ 
      method: 'GET',
      baseURL: 'http://localhost:8080',
      url: '/restaurants/profile',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(( {data: {data}} ) => {
      setRestaurantName(data.name)
      setEmail(data.email) 
      console.log(data.email)
    })
    .catch((err) => {
      localStorage.removeItem('token');
      history.push('/');
    })
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'address':
        setAddress(value)
        break;
      case 'phone':
        setPhone(value)
        break; 
      case 'scheduleFrom':
        setScheduleFrom(value)
        break;
      case 'scheduleTo':
        setScheduleTo(value)
        break;
      case 'deposit':
        setDeposit(value)
        break;
      case 'nit':
        setNit(value)
        break;
      default: break;
    }
  };

  function useHandleSubmit() {
    
    const token = localStorage.getItem('token');

    useEffect(() => {
      axios({
        method: 'PUT',
        baseURL: 'http://localhost:8080',
        url: '/restaurants',
        data: {
          id,
          restaurantName,
          email,
          address,
          phone,
          scheduleFrom,
          scheduleTo,
          deposit,
          nit,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(
          { type: GET_RESTAURANT_NAME, payload: restaurantName }, 
          { type: GET_RESTAURANT_EMAIL, payload: email },
          { type: GET_RESTAURANT_ADDRESS, payload: address },
          { type: GET_RESTAURANT_PHONE, payload: phone },
          { type: GET_RESTAURANT_SCHEDULEFROM, payload: scheduleFrom },
          { type: GET_RESTAURANT_SCHEDULETO, payload: scheduleTo },
          { type: GET_RESTAURANT_DEPOSIT, payload: deposit },
          { type: GET_RESTAURANT_NIT, payload: nit },
          )
          swal("Perfil actualizado exitosamente", "", "success");
          history.push('/my-restaurant')
      })
      .catch((err) => {
        swal("Tu perfil no pudo ser actualizado", "", "error");
      }
    )}, [])
  }

  const handleDeleteRestaurant = async (e) => {
    e.preventDefault();

    await swal("¿Estás seguro que quieres eliminar tu cuenta?", {
      buttons: {
        regret: "No, quiero quedarme otro rato",
        destroy: {
          text: "Sí",
          value: "destroy",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "regret":
          swal("Nos alegra que sigas con nosotros");
          break;
     
          case "destroy":
          try{
            const token = localStorage.getItem('token')
              axios({
              method: 'DELETE',
              baseURL: 'http://localhost:8080',
              url: '/restaurants',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            swal("Perfil eliminado exitosamente", "", "success");
            localStorage.removeItem('token');
            logout()
            this.props.history.push('/')
          }catch(err){
            swal("Tu perfil no pudo ser eliminado", "", "error");
          }
          break;
     
        default:
          swal("Nos alegra que sigas con nosotros");
      }
    });
  };

    return (
      <>
      <Desktopstructure>
        <BodyLeft>
          <H3>Tu Perfil</H3>
          <RestLogo 
            src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
            alt="logo"
          />
          <MyOfficesAnchor>Sucursales</MyOfficesAnchor>
        </BodyLeft>
        <BodyRight>
          <RestProfile
            key={id}
            restaurantName={restaurantName}
            email={email}
            address={address}
            phone={phone}
            scheduleFrom={scheduleFrom}
            scheduleTo={scheduleTo}
            deposit={deposit}
            nit={nit}
            handleChange={handleChange}
            handleSubmit={useHandleSubmit}
            handleDeleteRestaurant={handleDeleteRestaurant}
          />
        </BodyRight>
      </Desktopstructure>
      </>
    )
  }

export default RestaurantProfile;