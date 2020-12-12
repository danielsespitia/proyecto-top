import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../store/AuthContext'
import Desktopstructure from '../components/styled/DesktopStructure';
import RestProfile  from '../components/RestProfile';
import { 
  getName,
  getEmail,
  getAddress,
  getPhone,
  getScheduleFrom,
  getScheduleTo,
  getNit,
  getDeposit,
  getProfile,
  postRestaurantProfile,
} from '../store/restaurantReducer';
 
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

  const { logout } = useContext(AuthContext)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => { 
    dispatch(getProfile())
  },[])

  const profile = useSelector(
    ({restaurantReducer: { 
      ...state
    }}) => {
      return { ...state }
    })
  console.log(profile)

  if(profile.loading) return <p>Loading...</p>
  if(profile.error) return <p>Something went wrong</p>


  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'name':
        dispatch(getName(value))
        break;
      case 'email':
        dispatch(getEmail(value))
        break;
      case 'address':
        dispatch(getAddress(value))
        break;
      case 'phone':
        dispatch(getPhone(value))
        break;
      case 'scheduleFrom':
        dispatch(getScheduleFrom(value))
        break;
      case 'scheduleTo':
        dispatch(getScheduleTo(value))
        break;
      case 'nit':
        dispatch(getNit(value))
        break;
      case 'deposit':
        dispatch(getDeposit(value))
        break;
      default: break;
    }
  };

  function handleSubmit() {

    const update = dispatch( postRestaurantProfile ( profile ))
    if(profile.loading) return <p>Loading...</p>
    if(profile.error) return <p>Something went wrong</p>
      if(update){
        history.push('/restaurant-profile')
      }

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
              baseURL: process.env.REACT_APP_SERVER_URL,
              url: '/restaurants',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            swal("Perfil eliminado exitosamente", "", "success");
            localStorage.removeItem('token');
            logout()
            history.push('/')
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
            name={profile.name}
            email={profile.email}
            address={profile.address}
            phone={profile.phone}
            scheduleFrom={profile.scheduleFrom}
            scheduleTo={profile.scheduleTo}
            deposit={profile.deposit}
            nit={profile.nit}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleDeleteRestaurant={handleDeleteRestaurant}
          />
        </BodyRight>
      </Desktopstructure>
      </>
    )
  }

export default RestaurantProfile;
