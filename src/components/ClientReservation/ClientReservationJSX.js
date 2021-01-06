import Desktopstructure from '../styled/DesktopStructure'
import {
  BodyLeft,
  BodyRight,
  Select,
  ImageDecor
} from './ClientReservationStyles'

export function ClientReservationJSX () {
  return(
    <>
      <h1> Mis Reservas  </h1>
      <div>
        <label> Fecha de mi reservación: </label>
        <Select
          id="filterByDate"
          name="filterByDate"
        >
          <option value = "week"> Semana </option>
          <option value = "month"> Mes </option>
          <option value = "year"> Año </option>
        </Select>
      </div>
      <Desktopstructure>
        <BodyLeft>
         <ImageDecor
          src="../../image/coverPcAlamesa.png"
          alt="Imagen decoración"
        />
        </BodyLeft>
        <BodyRight>

        </BodyRight>
      </Desktopstructure>
    </>
  )
}
