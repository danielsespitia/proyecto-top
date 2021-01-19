import { useSelector } from 'react-redux';
import Restaurant  from '../components/Restaurant';
import styled from 'styled-components';
import ContainerContent from '../components/styled/ContainerContent';
import logo from '../image/RestaurantLogo.png';
import PageLoading from '../components/PageLoading';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-grap: 20px;
`;
const ContainerList = styled(ContainerContent)`
  grid-column: 2/5;
  width: auto;
  height: 100%;
  margin: 20px;
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
`;

function Restaurants () {

  const data = useSelector(
    ({reservationReducer: {
    ...state
  }}) => {
    return { ...state } 
  })

  if(data.loading) {
    return(
      <PageLoading/>
    )
  }

  return (
    <Container>
      <ContainerList>
        <Section>
          {!!data.restaurantList && data.restaurantList.length > 0 && data.restaurantList.map(({ _id, name, deposit, menu }) => {
            return (
              <Restaurant 
                key={_id}
                id={_id}
                name={name}
                deposit={deposit}
                menu={menu}
                logo={logo}
              />
            )
          })}
        </Section>
      </ContainerList>
    </Container>
  )
}

export default Restaurants
