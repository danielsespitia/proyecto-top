import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../store/AuthContext';
import { ClientProfileForm } from '../components/ClientProfileForm/ClientProfileForm';

function ClientProfile () {

  const history = useHistory();
  const {logout} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [identification, setIdentification] = useState('');
  const [birthday, setBirthday] = useState('');
  const [payType, setPayType] = useState('payU');

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/clients/profile',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(( {data: {data} }) => {
      const date = !data.birthday ? '' : data.birthday.split('T')[0];
      setName(data.name);
      setLastName(data.lastName);
      setEmail(data.email);
      setAddress(data.address);
      setPhone(data.phone);
      setIdentification(data.identification);
      setBirthday(data.birthday);
      setPayType(data.payType);
    })
    .catch(err => {
    localStorage.removeItem('token');
    history.push('/');
    })
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'name':
        setName(value)
        break;
      case 'lastName':
        setLastName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'address':
        setAddress(value)
        break;
      case 'phone':
        setPhone(value)
        break;
      case 'identification':
        setIdentification(value)
        break;
      case 'birthday':
        setBirthday(value)
        break;
      default: break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const resp = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/clients`,
        data: {
          name,
          lastName,
          email,
          address,
          phone,
          identification,
          birthday, 
          payType,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      swal("Perfil actualizado exitosamente", "", "success");
    }catch(err) {
      swal("Tu perfil no pudo ser actualizado", "", "error");
    }
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

    return(
    <ClientProfileForm
      name = {name}
      lastName = {lastName}
      email = {email}
      address = {address}
      phone = {phone}
      identification = {identification}
      birthday = {birthday}
      payType = {payType}
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      handleDeleteClient = {handleDeleteClient}
      >
    </ClientProfileForm>
    )
}

export default ClientProfile
