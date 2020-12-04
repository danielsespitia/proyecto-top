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
  getAddress,
  getPhone,
  getScheduleFrom,
  getScheduleTo,
  getNit,
  getDeposit,
  //postRestaurantProfile, getRestaurantProfile
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

  const dispatch = useDispatch();
  const history = useHistory();


  //const [ address, setAddress ] = useState('address valr inicial');
  //console.log(address)

  const { 
    loading,
    error, 
    address, 
    phone,
    scheduleFrom,
    scheduleTo,
    nit,
    deposit,
  } = useSelector(
    ({restaurantReducer: { 
      loading, 
      error, 
      address,
      phone,
      scheduleFrom,
      scheduleTo,
      nit,
      deposit,
    }}) => {
      return { loading, error, address, phone, scheduleFrom, scheduleTo, nit, deposit }
    })
  console.log( 'lo que recibo del useSelector:',loading, error, address, phone, scheduleFrom, scheduleTo, nit, deposit )

  //useEffect(() => {
    //dispatch(getRestaurantProfile())
  //},[])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong</p>

  //swal("Perfil actualizado exitosamente", "", "success");


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('cmoponentet:',name, value )
    switch(name) {
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

    const data = {
      //id,
      //restaurantName,
      //email,
      address,
      //phone,
      //scheduleFrom,
      //scheduleTo,
      //deposit,
      //nit,
    }

      //dispatch(postRestaurantProfile(data))

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    //swal("Perfil actualizado exitosamente", "", "success");
   //history.push('/my-restaurant')



    //const token = localStorage.getItem('token');

    //useEffect(() => {
      //axios({
        //method: 'PUT',
        //baseURL: 'http://localhost:8080',
        //url: '/restaurants',
        //data: {
          //id,
          //restaurantName,
          //email,
          //address,
          //phone,
          //scheduleFrom,
          //scheduleTo,
          //deposit,
          //nit,
        //},
        //headers: {
          //Authorization: `Bearer ${token}`,
        //},
      //})
      //.then(() => {
        //dispatch(
          //{ type: GET_RESTAURANT_NAME, payload: restaurantName }, 
          //{ type: GET_RESTAURANT_EMAIL, payload: email },
          //{ type: GET_RESTAURANT_ADDRESS, payload: address },
          //{ type: GET_RESTAURANT_PHONE, payload: phone },
          //{ type: GET_RESTAURANT_SCHEDULEFROM, payload: scheduleFrom },
          //{ type: GET_RESTAURANT_SCHEDULETO, payload: scheduleTo },
          //{ type: GET_RESTAURANT_DEPOSIT, payload: deposit },
          //{ type: GET_RESTAURANT_NIT, payload: nit },
          //)
          //swal("Perfil actualizado exitosamente", "", "success");
          //history.push('/my-restaurant')
      //})
      //.catch((err) => {
        //swal("Tu perfil no pudo ser actualizado", "", "error");
      //}
    //)}, [])
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
            //logout()
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
            //key={id}
            //restaurantName={restaurantName}
            //email={email}
            address={address}
            phone={phone}
            scheduleFrom={scheduleFrom}
            scheduleTo={scheduleTo}
            deposit={deposit}
            nit={nit}
            handleChange={handleChange}
            //handleSubmit={handleSubmit}
            //handleDeleteRestaurant={handleDeleteRestaurant}
          />
        </BodyRight>
      </Desktopstructure>
      </>
    )
  }

export default RestaurantProfile;
