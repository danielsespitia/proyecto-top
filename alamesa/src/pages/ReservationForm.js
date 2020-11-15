import React, { Component } from 'react'
import styled from 'styled-components'
//import { data } from '../data'

const Section = styled.section`
  display: flex;
`;

const Img = styled.img`
  float: left;
  width:  120px;
  height: 120px;
  padding: 0px 5px;
  margin: 6px;
  background-size: cover;
`;
const Reservation = styled.main`
  display: flex;
  justify-content: space-around;
`;
const Article = styled.article`
  display: block;
  
`;
const Label = styled.label`
  display: block;
`;
const Select = styled.select`
  display: block;
`;

const Input = styled.input`
  display: block;
`;

class ReservationForm extends Component {

  state = {
    //restaurants: data
//mentiras los datos toca traerlos por props al hecer lick en el boton de reservar ahora
  }

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="reservation"
      >
        <Section>
          <Img
            src="../image/RestaurantLogo.png"
          >
          </Img>
        </Section>
        <Reservation>
          <Article>
            <Label
              className="Form__reservation-branch-label"
              htmlFor="branch"
            >Sucursal
            </Label>
            <Select defaultValue={'default'}
              className="Form__reservation-branch-select"
              name="branch"
              id="branch"
              form="reservation"
              autoFocus
              required
            > 
              <option 
                value="default" disabled hidden
              >Selecciona sucursal
              </option>
              <option 
                value="centro"
              >centro
              </option>
              <option 
                value="chapinero"
              >chapinero
              </option>
              <option 
                value="norte"
              >norte
              </option>
            </Select>
          </Article>
          <Article>
            <Label 
              className="Form__reservation-date-label"
              htmlFor="date"
            >
              Selecciona el dia de reserva
            </Label>
            <Input
              className="Form__reservation-date-input"
              id="date"
              name="date"
              type="date" 
              data-date-format="DD MM YYYY"
              required
              />
            </Article>
          <Article>
            <Label
              className="Form__reservation-time-label"
              htmlFor="time"
            >Selecciona la hora de reserva
            </Label>
            <Input
              className="Form__reservation-time-input"
              id="time"
              name="time"
              type="time"
              min="11:00"
              max="14:00"
            />
          </Article>
          <Article>
            <Label
              className="Form__reservation-time-range-label"
              htmlFor="time-range"
            >Cuanto tiempo te reservamos
            </Label>
            <Select
              className="Form__reservation-time-range-select"
              name="time-range"
              id="time-range"
              form="reservation"
              required
            > 
              <option 
                value="1 hora"
              >1 hora
              </option>
              <option 
                value="2 horas"
              >2 horas
              </option>
              <option 
                value="3 horas"
              >3 horas
              </option>
            </Select>
          </Article>
        </Reservation>
      </form>
    )
  }
}

export default ReservationForm
