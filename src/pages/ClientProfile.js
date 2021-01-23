import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../store/AuthContext';
import { ClientProfileForm } from '../components/ClientProfileForm/ClientProfileForm';
import { 
  setClientId,
  setClientName,
  setClientLastName,
  setClientEmail,
  setClientImage,
  setClientAddress,
  setClientPhone,
  setClientIdentification,
  setClientBirthday,
  setClientIdType,
  getClient,
  updateClient,
} from '../store/actions/Client.actions';
import PageLoading from '../components/PageLoading';
import PageNotFound from '../components/PageNotFound/NotFound';

function ClientProfile () {

  const history = useHistory();
  const {logout} = useContext(AuthContext);
  const [file, setFile] = useState(null)
  const [hiddenButton, setHiddenButton] = useState('disabled')
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getClient())
    setHiddenButton('disabled')
  },[])

  const profile = useSelector(
    ({clientReducer: {
      ...state
    }}) => {
      return { ...state }
  })

  if(!profile.image){
    profile.image = 'https://res.cloudinary.com/alamesa/image/upload/v1611345897/Restaurant-Logo/hdkeeircptebxsvdqgdt.png'
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    switch(name) {
      case 'name':
        dispatch(setClientName(value))
        break;
      case 'lastName':
        dispatch(setClientLastName(value))
        break;
      case 'email':
        dispatch(setClientEmail(value))
        break;
      case 'address':
        console.log('addres chenage')
        dispatch(setClientAddress(value))
        break;
      case 'phone':
        dispatch(setClientPhone(value))
        break;
      case 'identification':
        console.log('entre a identification hac=ndle w')
        dispatch(setClientIdentification(value))
        break;
      case 'birthday':
        dispatch(setClientBirthday(value))
        break;
      case 'idType':
        dispatch(setClientIdType(value))
        break;
      default: break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateClient(profile))
    if(profile.loading) return <PageLoading/>
    if(profile.error) return <PageNotFound/>
  };

  const handleDeleteClient = async (e) => {
    e.preventDefault();
    await swal("Estas seguro que quieres eliminar tu cuenta?", {
      buttons: {
        regret: "No, quiero quedamer otro rato",
        destroy: {
          text: "Si",
          value: "destroy",
        },
      },
    })
    .then ((value) => {
      switch (value) {
        case "cancel":
          swal("Nos alegra que sigas con nosotros");
          break;

          case "destroy":
            try{
              const token = localStorage.getItem('token')
              axios({
                method: 'DELETE',
                baseURL: process.env.REACT_APP_SERVER_URL,
                url: `/clients`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              swal("Perfil eliminado exitosamente","","success");
              localStorage.removeItem('token');
              logout();
              history.push('/');
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
      dispatch(setClientImage(e.target.result))
    }
    reader.readAsDataURL(file)
    setHiddenButton('')
  }

  async function handleChangeImage(e) {
    e.preventDefault()
    readFile(e.target.files[0])
    setFile(e.target.files[0])
  }

  async function handleSubmitImage(e){
    e.preventDefault()
    const data = new FormData()
    data.append('image', profile.image)
    data.append('file', file)
    try {
      const token = localStorage.getItem('token')
      await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/clients/update-image',
        data,
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-type': 'multipart/form-data'
        }
      })
      swal('Imagen actualizada correctamente', '', 'success')
      setHiddenButton('disabled')

    }catch(error) {
      swal('Tu imagen no pudo ser cargada','','error')
    }
  }

    return(
    <ClientProfileForm
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      handleDeleteClient = {handleDeleteClient}
      handleChangeImage = {handleChangeImage}
      handleSubmitImage = {handleSubmitImage}
      image = {profile.image}
      hiddenButton = {hiddenButton}
      >
    </ClientProfileForm>
    )
}

export default ClientProfile
