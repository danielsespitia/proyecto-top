import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContainerContent from './styled/ContainerContent'
import ButtonPrimary from './styled/ButtonPrimary'
import { Link } from 'react-router-dom'
import PageLoading from './PageLoading'

const ContainerTitleShopping = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid black;
  margin: auto;
`;
const ContainerContentShoppingList = styled(ContainerContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LabelTable = styled.table`
  border-spacing: 20px;
  margin: auto;
`;

const TextStrongTotal = styled.td`
  font-weight: 800;
`;

export const Message = styled.span`
  font-size: 12px;
  color: #0f31dd;
  font-style: italic;
  font-weight: 800;
`;

export function ListShoppingCart ( { deposit, message, id, loading } ) {
  
  
  const total = deposit;

  const paymentConfirm = `/restaurants/${id}/reservation/confirm`;

  if(loading) return <PageLoading/>

  return(
    <section>
      <ContainerTitleShopping>
        <Message>{message}</Message>
        <h2>Mi carrito</h2>
        <FontAwesomeIcon icon="shopping-cart"/>
      </ContainerTitleShopping>
      <ContainerContentShoppingList>
        <LabelTable>
          <tr>
            <td>Pago minimo</td>
            <td>{deposit}</td>
          </tr>
          <tr>
            <TextStrongTotal>Total</TextStrongTotal>
            <td>{total}</td>
          </tr>
          </LabelTable>
        <ButtonPrimary as={Link} to={paymentConfirm}>Finalizar tu orden</ButtonPrimary>
      </ContainerContentShoppingList>
    </section>
  )
}
