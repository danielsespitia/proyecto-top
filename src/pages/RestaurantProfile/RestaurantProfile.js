import { useDispatch, useSelector } from 'react-redux';
import { 
  RestLogo,
  BodyLeft,
  BodyRight,
  MyLinkToMore,
} from './RestaurantProfileStyles';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../../store/AuthContext'
import Desktopstructure from '../../components/styled/DesktopStructure';
import RestaurantProfileForm from '../../components/RestaurantProfileForm/RestaurantProfileForm';
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
} from '../../store/actions/Restaurant.actions';
import PageLoading from '../../components/PageLoading';
import PageNotFound from '../../components/PageNotFound/NotFound';
  
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

  if(profile.loading) return <PageLoading/>
  if(profile.error) return <PageNotFound/>


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
    if(profile.loading) return <PageLoading/>
    if(profile.error) return <PageNotFound/>
      if(update){
        history.push('/restaurant-profile/view')
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
          <RestLogo 
            src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
            alt="logo"
          />
          <MyLinkToMore
            to='/restaurant-profile/my-menu'
          >
            Mi carta
          </MyLinkToMore>
        </BodyLeft>
        <BodyRight>
          <RestaurantProfileForm
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
