import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContainerContent from '../components/styled/ContainerContent'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../components/styled/ButtonPrimary'


const ContainerList = styled(ContainerContent)`
  width: auto;
  margin: 20px;
`;
const LinkSanitaryUpdate = styled(Link)`
  color: #005cc5;
  text-decoration: underline;
`;
const SectionHeader = styled.section`
  display: grid;
  justify-items: center;
`;
const RestaurantName = styled.span`
  font-size: xx-large;
  border-bottom: 2px solid darkgray;
  padding: 5px 0px;
`;

const RestaurantLogo = styled.img`
  float: left;
  width:  120px;
  height: 120px;
  padding: 15px 5px;
  margin: 6px;
  background-size: cover;
`;
const ReservationContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  justify-content: space-around;
  padding: 15px 0px;
  justify-items: center;
`;
const Article = styled.article`
  display: block;  
  margin-top: 20px;
`;
const ArticleCheck = styled.article`
  display: inline;  
  direction: rtl;
`;
const PeopleContainer = styled.article`
  display: inline;  
  grid-column: 1/5; 
  margin-top: 50px

`;
const InputPeople = styled.input`
  width: 50px;
  display: inline;
`;
const Label = styled.label`
  display: block;
`;
const LabelCheck = styled.label`
  display: inline;
`;
const SelectForm = styled.select`
  display: inline;
`;

const Input = styled.input`
  display: inline;
`;
const Span = styled.span`
  display: inline;
  grid-column: 1/5;
  margin: 15px;
`;

class ReservationForm extends Component {

  state = {
    branch: '',
    date: '',
    time: '',
    timeRange: '',
    people: '',
    agree: false,
  }

  handleChange = (e) => {
    const { name, value, type, checked} = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  };


  render () {
    const {
      branch,
      date,
      time,
      timeRange,
      people,
      agree,
    } = this.state

    const { name, logo } = this.props.location.state.Restaurant
    return (
      <>
        <ContainerList>
          <SectionHeader>
            <RestaurantName>
             {name} 
            </RestaurantName>
            <RestaurantLogo
            src={logo}
            />
          </SectionHeader>
        </ContainerList>
        <form
          onSubmit={this.handleSubmit}
          id="reservation"
        >
          <ContainerList>
            <ReservationContainer>
              <Span>
                puedes seleccionar tu menu antes de llegar si deseas
              </Span>
              <Article>
                <Label
                  className="Form__reservation-branch-label"
                  htmlFor="branch"
                >Sucursal
                </Label>
                <SelectForm
                  className="Form__reservation-branch-select"
                  name="branch"
                  id="branch"
                  form="reservation"
                  value={branch}
                  onChange={ this.handleChange }
                  autoFocus
                  required
                > 
                  <option 
                    value="" disabled selected
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
                </SelectForm>
              </Article>
              <Article>
                <Label 
                  className="Form__reservation-date-label"
                  htmlFor="date"
                >
                  Selecciona el dia de reserva
                </Label>
                  <FontAwesomeIcon icon="calendar-alt" />
                  <Input
                    className="Form__reservation-date-input"
                    id="date"
                    name="date"
                    type='date'
                    value={date}
                    placeHolder={this.iconDate}
                    onChange={ this.handleChange }
                    required
                    />
              </Article>
              <Article>
                <Label
                  className="Form__reservation-time-label"
                  htmlFor="time"
                >Selecciona la hora de reserva
                </Label>
                  <FontAwesomeIcon icon="clock" />
                <Input
                  className="Form__reservation-time-input"
                  id="time"
                  name="time"
                  type="time"
                  value={time}
                  onChange={ this.handleChange }
                  min="11:00"
                  max="14:00"
                  required
                />
              </Article>
              <Article>
                <Label
                  className="Form__reservation-time-range-label"
                  htmlFor="time-range"
                >Cuanto tiempo te reservamos
                </Label>
                  <FontAwesomeIcon icon="clock" />
                <SelectForm
                  className="Form__reservation-time-range-select"
                  name="time-range"
                  id="time-range"
                  form="reservation"
                  value={timeRange}
                  onChange={ this.handleChange }
                  required
                > 
                  <option 
                    value="" disabled selected
                  >Tiempo de reserva
                  </option>
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
                </SelectForm>
              </Article>
              <PeopleContainer>
                <Label
                  className="Form__reservation-people-label"
                  htmlFor="people"
                >Para cuantas personas te reservamos
                </Label>
                  <FontAwesomeIcon icon="user" />
                <InputPeople
                  className="Form__reservation-people-input"
                  name="people"
                  id="people"
                  type="number"
                  value={people}
                  min="1"
                  form="reservation"
                  onChange={ this.handleChange}
                  required/>
              </PeopleContainer>
              <Span>
                <ArticleCheck>
                  <LabelCheck 
                    className="Form__reservation-checkbox"
                    htmlFor="agree"
                  >
                    Acepto el tiempo limite que el restaurante establece
                  </LabelCheck>
                  <Input
                    className="Form__reservation-checkbox"
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={this.handleChange}
                    required
                  />
                </ArticleCheck>
              </Span>
              <Span>
                <LinkSanitaryUpdate to="/sanitary-register">
                  Actualizar registro sanitario
                </LinkSanitaryUpdate>
              </Span>
              <Span>
                <LinkSanitaryUpdate to="/sanitary-register">
                  Agregar registro sanitario de mis compañeros
                </LinkSanitaryUpdate>
              </Span>
              <Span>
                <ButtonPrimary
                  className="Form__reservation-add-shoppingList"
                  type="submit"
                  value="Agregar mi Reserva al carrito"
                />
              </Span>
            </ReservationContainer>
          </ContainerList>
        </form>
      </>
    )
  }
}

export default ReservationForm
