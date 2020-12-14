import ButtonPrimary from '../components/styled/ButtonPrimary'
import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'

const ContainerReserve = styled(ContainerContent)`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 20px;
`;
const ContainerPaymentZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerTotal = styled(ContainerContent)`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  font-weight: bold;
`;
const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
`;
const SectionMenuDetails = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
`;
const SectionRestaurantDetails = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
`;
const Th = styled.th`
  text-align: left;
  padding-left: 15px
  border: 1px solid;
`
const TdItem = styled.td`
  padding: 15px;
  text-align: left;
`;
const TdRestaurantDetails  = styled.td`
  padding: 15px;
  text-align: left;
  font-weight: bold;
`;
const TdItemTotal = styled.td`
  padding: 15px;
  font-weight: bold;
  text-align: left;
`;
const TdPrice = styled.td`
  text-align: right;
`
const TdTotalPrice = styled.td`
  font-weight: bold;
  text-align: right;
`

function ReservationConfirm() {

  const today = new Date()
  const month = today.toLocaleString('es-CO', { month: 'long'}) 
  const date = `${ today.getDate() } de ${ month } de ${ today.getFullYear()}`
  const time = today.toLocaleString('es-CO', { timeStyle: 'short', hour12: 'true'})
  const price = '$20.000'

  return (
    <>
      <ContainerReserve>
        <SectionTitle>
        <h2>TU PEDIDO</h2>
        </SectionTitle>
        <SectionMenuDetails>
          <tr> 
            <Th></Th>
            <th></th>
          </tr>
          <tr>
            <TdItem>
              pago minimo
            </TdItem>
            <TdPrice>
              { price }
            </TdPrice>
          </tr>
          <tr>
            <TdItemTotal>
              Total a pagar
            </TdItemTotal>
            <TdTotalPrice>
              { price }
            </TdTotalPrice>
          </tr>
        </SectionMenuDetails>
        <SectionRestaurantDetails>
          <tr> 
            <Th></Th>
            <th></th>
          </tr>
          <tr>
            <TdRestaurantDetails>
              Fecha
            </TdRestaurantDetails>
            <TdPrice>
              { date }
            </TdPrice>
          </tr>
          <tr>
            <TdRestaurantDetails>
              hora
            </TdRestaurantDetails>
            <TdPrice>
              { time }
            </TdPrice>
          </tr>
        </SectionRestaurantDetails>
      </ContainerReserve>
      <ContainerPaymentZone>
        <ContainerTotal>
          <span>
            Total a pagar
          </span>
          <span>
            { price }
          </span>
        </ContainerTotal>
        <ButtonPrimary
          type='button'
          value='Confirmar y Pagar'
        />
    </ContainerPaymentZone>
    </>
  )
}

export default ReservationConfirm
