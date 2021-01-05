import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  setRestaurantId,
  setRestaurantName,
  setRestaurantDeposit,
} from '../store/actions/Reservation.actions';

const LinkToRestaurant = styled(Link)`
  font-size: 14px;
  &:hover {
    color: rgba(58,60,63,0.8);
  };
`;

function MiniSearchRestaurant({ id, name, deposit, }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setRestaurantId(id))
    dispatch(setRestaurantName(name))
    dispatch(setRestaurantDeposit(deposit))
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