import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  setRestaurantId,
  setRestaurantName,
  setRestaurantDeposit,
  setRestaurantMenuId,
} from '../store/actions/Reservation.actions';
import { setSearch } from '../store/actions/Restaurant.actions';

const LinkToRestaurant = styled(Link)`
  font-size: 14px;
  &:hover {
    color: rgba(58,60,63,0.8);
  };
`;

function MiniSearchRestaurant({ id, name, deposit, menu }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setRestaurantId(id))
    dispatch(setRestaurantName(name))
    dispatch(setRestaurantDeposit(deposit))
    dispatch(setRestaurantMenuId(menu))
    dispatch(setSearch(''))
  };

  return (
    <div>
      <section>
        <LinkToRestaurant to={{
          pathname: `/restaurants/${id}/reservation`,
        }}
        onClick={handleClick}
        >
          <p>{name}</p>
        </LinkToRestaurant>
      </section>
    </div>
  )
}

export default MiniSearchRestaurant;