import { useSelector } from 'react-redux';
import Restaurant  from '../components/Restaurant';
import styled from 'styled-components';
import ContainerContent from '../components/styled/ContainerContent';
import logo from '../image/RestaurantLogo.png';
import PageLoading from '../components/PageLoading';
import DesktopStructure from '../components/styled/DesktopStructure';

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
const BodyLeft = styled(ContainerContent)`
  grid-area: bodyLeft;
  padding: 15px 15px;
`;
const BodyRight = styled.div`
  grid-area: bodyRight;
`;
const TitleCategory = styled.h4`
  font-size: 24px;
  margin: 10px 0 20px 0;
`;
const ContainerCategories = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6C757D;
  margin-bottom: 10px
`;
const Button = styled.button`
  width: fit-content;
  font-size: 14px;
  padding: 6px 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #6C757D;
  color: #6C757D;
  cursor: pointer;
    &:hover {
    background-color: #7741ff3b;
  };
`;
const ButtonRender = styled(Button)`
  background-color: #7741ff3b;
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
    <DesktopStructure>
      <BodyLeft>
        <TitleCategory>Categorias</TitleCategory>
        <ContainerCategories>
          <ButtonRender>Todos</ButtonRender>
          <Button>Pollito</Button>
          <Button>Sushicito</Button>
          <Button>Carnecita</Button>
          <Button>Hamburguecita</Button>
          <Button>Mexicanita</Button>
        </ContainerCategories>
      </BodyLeft>
      <BodyRight>
        <div>
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
        </div>      
      </BodyRight>
    </DesktopStructure>
  )
}

export default Restaurants
