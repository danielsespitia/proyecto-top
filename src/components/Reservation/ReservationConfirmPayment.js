import ButtonPrimary from '../styled/ButtonPrimary'
import {
  ContainerReserve,
  ContainerPaymentZone,
  ContainerTotal,
  SectionTitle,
  SectionMenuDetails,
  SectionRestaurantDetails,
  Th,
  TdItem,
  TdRestaurantDetails,
  TdItemTotal,
  TdPrice,
  TdTotalPrice
} from './ReservationStyles'

export function ReservationConfirmPayment({
  name,
  deposit,
  date,
  time
})
{
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
              { deposit }
            </TdPrice>
          </tr>
          <tr>
            <TdItemTotal>
              Total a pagar
            </TdItemTotal>
            <TdTotalPrice>
              { deposit }
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
              Tu Restaurante
            </TdRestaurantDetails>
            <TdPrice>
              { name }
            </TdPrice>
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
            { deposit }
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
