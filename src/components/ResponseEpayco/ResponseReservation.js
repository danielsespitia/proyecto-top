import {
  ContainerResponse,
  TableResume,
  TitleResponse,
  IconCheck,
  RowColorPrimary, 
  TextConcept,
  RowColorWhite,
  RowConcept,
  ColumnCell,
  ColumnCellAlignStart,
  ContainerResumeDate,
  ContainerTextSafe,
  ContainerDate,
} from './ResponseStyles';

export function ResponseComponent() {
  return (
    <ContainerResponse>
      <span>
        <IconCheck icon={"check-circle"}/>
        <TitleResponse>!Gracias por confiar en nosotros, esperamos que disfrutes del restaurante</TitleResponse>
      </span>
      <span>
        <TableResume className="table_resume">
          <RowColorPrimary className="row_names">
            <ColumnCellAlignStart className="column_concept">
              Concepto
            </ColumnCellAlignStart>
            <ColumnCell className="column_quantity">
              Cantidad
            </ColumnCell>
            <ColumnCell className="column_price">
              Precio
            </ColumnCell>
          </RowColorPrimary>
          <RowColorWhite className="row_content">
            <RowConcept className="column_image">
              <img
                src="https://res.cloudinary.com/alamesa/image/upload/v1610829748/UI/Open_Peeps_Together_ubrgfd.svg"
                alt="Logo para representar la reunión"
              />
              <TextConcept>
                Reserva en el restaurante <strong>Pollito</strong>
              </TextConcept>
            </RowConcept>
            <ColumnCell className="column_quantity-render">
              <p>1</p>
            </ColumnCell>
            <ColumnCell className="column_price-render">
              <p>$50000</p>
            </ColumnCell>
          </RowColorWhite>
          <RowColorPrimary>
            <ColumnCell></ColumnCell>
            <ColumnCell>
              Subtotal
            </ColumnCell>
            <ColumnCell>
              $50000
            </ColumnCell>
          </RowColorPrimary>
          <RowColorWhite>
            <ColumnCell></ColumnCell>
            <ColumnCell>
              Iva
            </ColumnCell>
            <ColumnCell>
              0%
            </ColumnCell>
          </RowColorWhite>
          <RowColorPrimary>
            <ColumnCell></ColumnCell>
            <ColumnCell>
              Total
            </ColumnCell>
            <ColumnCell>
              $50000
            </ColumnCell>
          </RowColorPrimary>
        </TableResume>
      </span>
      <ContainerResumeDate>
        <ContainerTextSafe>
          <p>No olvides llevar tu tapabocas, nos cuidamos entre todos 😷</p>
        </ContainerTextSafe>
        <ContainerDate>
          <span>
            <p>Te esperamos el día:</p>
            <p><strong>Viernes 25 oct</strong></p>
          </span>
          <hr></hr>
          <span>
            <p>A las:</p>
            <p><strong>2:00pm</strong></p>
          </span>
        </ContainerDate>
      </ContainerResumeDate>
    </ContainerResponse>
  )
};