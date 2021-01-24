import { useDispatch } from 'react-redux'
import RestaurantLogo from '../image/RestaurantLogo.png' 
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  setRestaurantId,
  setRestaurantName,
  setRestaurantDeposit,
  setRestaurantMenuId,
  } from '../store/actions/Reservation.actions'

const Article = styled.article`
  margin: 5px;
  border-bottom: 2px solid darkgray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const Img = styled.img`
  float: left;
  width:  100px;
  height: 100px;
  padding: 0px 5px;
  margin: 6px;
  background-size: cover;
  border-radius: 10px;
`;
const RestaurantName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 20px 5px;
  margin: 0px 10px;
`;
const Button = styled.button`
  background-color: #2F80ED;
  color: #F8F8F8;
  border-radius: 10px;
  border: none;
  padding: 3px 10px;
  cursor: pointer;
    &:hover {
      background-color: ${
        props => props.theme.secundaryColorBlur
      };
    };
`;
const Category = styled.p`
  font-size: 12px;
  color: #9E9FA5;
  margin: 5px 0 20px;
`;
const NameRestaurant = styled.h4`
  font-size: 14px;
  margin: 5px 0;
`;


function Restaurant ({ id, name, deposit, logo, menu }) {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setRestaurantId(id))
    dispatch(setRestaurantName(name))
    dispatch(setRestaurantDeposit(deposit))
    dispatch(setRestaurantMenuId(menu))
  }

  if(!logo) {
    logo = RestaurantLogo
  }

  return (
    <Article>
      <Img 
        src={logo}
        alt={name +' logo'}
      />
      <RestaurantName>
        <NameRestaurant>{name}</NameRestaurant>
        <Category>Varios</Category>
        <Link to={{
          pathname: `/restaurants/${id}/reservation`,
          }}>
          <Button
            type='button'
            onClick={handleClick}
          >
            Reservar Ahora
          </Button>
        </Link>
      </RestaurantName>
    </Article>
  )
}

export default Restaurant
