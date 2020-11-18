import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ContainerContent from './styled/ContainerContent'
import ButtonPrimary from './styled/ButtonPrimary'

const ContainerTitleShopping = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid black;
  margin: auto;
`
const TextStrongTotal = styled.td`
  font-weight: 800;
`

export function ListShoppingCart ( { deposit } ) {
  return(
    <section>
      <ContainerTitleShopping>
        <h2>Mi carrito</h2>
        <FontAwesomeIcon icon={faShoppingCart}/>
      </ContainerTitleShopping>
      <ContainerContent>
        <table>
          <tr>
            <td>Pago minimo</td>
            <td>{deposit}</td>
          </tr>
          <tr>
            <TextStrongTotal>Total</TextStrongTotal>
            <td>$48.000</td>
          </tr>
          </table>
        <ButtonPrimary as="button">Finalizar tu orden</ButtonPrimary>
      </ContainerContent>
    </section>

  )
}
