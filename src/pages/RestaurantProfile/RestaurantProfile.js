import { useDispatch, useSelector } from 'react-redux';
import { 
  RestLogo,
  BodyLeft,
  BodyRight,
  MyLinkToMore,
} from './RestaurantProfileStyles';
import { useContext, useEffect, useState } from 'react';
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

  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)
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

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = e => {
      setImage(e.target.result)

    }
    reader.readAsDataURL(file)
  }

  async function handleChangeLogo(e) {
    e.preventDefault()
    readFile(e.target.files[0])
    setFile(e.target.files[0])

    const data = new FormData()
    data.append('image', image)
    data.append('file', file)
      
    try {
      const token = localStorage.getItem('token')
      await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/restaurants',
        data,
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-type': 'multipart/form-data'
        }
      })
    }catch(error) {
      setImage(null)
      swal('Tu imagen no pudo ser cargada','','error')
    }
  }

    return (
      <>
      <Desktopstructure>
        <BodyLeft>
          <RestLogo 
            src={image}
            alt="logo"
          />
          <form >
            <label htmlfor="file">
              Logo
            </label>
            <input 
              type="file"
              accept="image/*"
              name="file"
              id="file"
              onChange={handleChangeLogo}
            />
          </form>
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
