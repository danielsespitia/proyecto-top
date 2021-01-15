import { useDispatch } from 'react-redux'
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
  width:  120px;
  height: 120px;
  padding: 0px 5px;
  margin: 6px;
  background-size: cover;
`;
const RestaurantName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
  margin: 0px 10px;
`;
const Button = styled.button`
  background-color: #2F80ED;
  color: #F8F8F8;
  border-radius: 10px;
`;


function Restaurant ({ id, name, deposit, logo, menu }) {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setRestaurantId(id))
    dispatch(setRestaurantName(name))
    dispatch(setRestaurantDeposit(deposit))
    dispatch(setRestaurantMenuId(menu))
  }

  return (
    <Article>
      <Img 
        src={logo}
        alt={name +' logo'}
      />
      <RestaurantName>
        <h1>{name}</h1>
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
