import {
  RestLogo,
  BodyLeft,
  BodyRight,
  MyLinkToMore,
} from './RestaurantProfile/RestaurantProfileStyles';
import Desktopstructure from '../components/styled/DesktopStructure';
import RestaurantProfileViewForm from '../components/RestaurantProfileViewForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../store/actions/Restaurant.actions';
import { useHistory } from 'react-router-dom';

function RestaurantProfileView() {

  const dispatch = useDispatch()
  
  const dataRestaurant = useSelector((
    { restaurantReducer: {
      ...state
    }}) => {
      return { ...state }
    })
    
    useEffect(() => {
      dispatch(getProfile())
    }, [])
    
  let history = useHistory()
  const handleClick = e => {
    e.preventDefault();
    history.push('/restaurant-profile/edit')
  }

  const { 
    _id,
    name,
    email,
    address,
    phone,
    scheduleFrom,
    scheduleTo,
    deposit,
    nit,
  } = dataRestaurant

  return (
    <>
    <Desktopstructure>
      <BodyLeft>
        <RestLogo 
          src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
          alt="logo"
        />
        <MyLinkToMore 
          to='/restaurant-profile/reservations'
        >
          Mis reservas
        </MyLinkToMore>
      </BodyLeft>
      <BodyRight>
        <RestaurantProfileViewForm
          key={_id}
          restaurantName={name}
          email={email}
          address={address}
          phone={phone}
          scheduleFrom={scheduleFrom}
          scheduleTo={scheduleTo}
          deposit={deposit}
          nit={nit}
          handleClick={handleClick}
        />
      </BodyRight>
    </Desktopstructure>
    </>
  )
}

export default RestaurantProfileView
