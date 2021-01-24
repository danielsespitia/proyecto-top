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
import PageLoading from '../components/PageLoading';

function RestaurantProfileView() {

  let history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [])
  
  const dataRestaurant = useSelector((
    { restaurantReducer: {
      ...state
    }}) => {
      return { ...state }
    })
    
    if(!dataRestaurant.logo){
      dataRestaurant.logo = 'https://res.cloudinary.com/alamesa/image/upload/v1611345897/Restaurant-Logo/hdkeeircptebxsvdqgdt.png'
    }
    
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

  if(dataRestaurant.loading) {
    return(
      <PageLoading/>
    )
  }

  return (
    <>
    <Desktopstructure>
      <BodyLeft>
        <RestLogo 
          src={dataRestaurant.logo}
          alt="logo"
        />
      <MyLinkToMore
        to='/restaurant-profile/my-menu'
      >
        Mi carta
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
