import { useState, useEffect} from 'react'
import Restaurant  from '../components/Restaurant'
import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'  
import logo from '../image/RestaurantLogo.png'
import axios from 'axios'

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

  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      method:'GET',
      baseURL:'http://localhost:8080',
      url:'/restaurants/',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(({ data: { data } }) => {
      setRestaurants(data)
      setLoading(false)
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })
  }, []) 

  return (
    <Container>
      <ContainerList>
        <Section>
          {!!restaurants && restaurants.length > 0 && restaurants.map(({ _id, name }) => {
            return (
              <Restaurant 
                key={_id}
                id={_id}
                name={name}
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
