import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkToRestaurant = styled(Link)`
  font-size: 14px;
  &:hover {
    color: rgba(58,60,63,0.8);
  };
`;

function MiniSearchRestaurant({ id, name }) {
  return (
    <div>
      <section>
        <LinkToRestaurant to={{
          pathname: `/restaurants/${id}/reservation`,
        }}>
          <p>{name}</p>
        </LinkToRestaurant>
      </section>
    </div>
  )
}

export default MiniSearchRestaurant;