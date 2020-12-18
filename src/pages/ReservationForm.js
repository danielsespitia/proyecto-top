import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContainerContent from '../components/styled/ContainerContent'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import logo from '../image/RestaurantLogo.png'
import { 
  setBranch, 
  setDate,
  setTime,
  setRange,
  setPeople,
  setAgree
}
from '../store/actions/Reservation.actions'
import { AuthContext } from '../store/AuthContext'
import { useContext } from 'react'
import SanitaryRegister from './SanitaryRegister'
import SanitaryRegisterCompanion from './SanitaryRegisterCompanion'

const ContainerList = styled(ContainerContent)`
  width: auto;
  margin: 20px;
  text-align: center;
`;
const LinkSanitaryUpdate = styled.button`
  font-size: 16px;
  color: #2F80ED;
  border: 0px;
  text-decoration: underline;
  
  &:focus {
    background-color: white;
    border-radius: 4px;
    padding: 7px;
    outline: none;
  };
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
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Article = styled.article`
  display: block;  
  margin-top: 20px;
`;
const ArticleCheck = styled.article`
  display: inline;  
  direction: rtl;
`;
const PeopleContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
`;
const InputPeople = styled.input`
  width: 50px;
  display: inline;
  border: none;
`;
const Label = styled.label`
  display: block;
  margin-top: 30px;
`;
const LabelCheck = styled.label`
  display: inline;
`;
const SelectForm = styled.select`
  display: inline;
`;
const Input = styled.input`
  display: inline;
  border: none;
`;
const TitleParagraph = styled.span`
  border-bottom: 1px #828282 solid;
  width: 1035px;
  padding-bottom: 50px;
  text-align: start;
  display: block;
  grid-column: 1/5;
  margin: 15px;
`;
const Span = styled.span`
  display: block;
  grid-column: 1/5;
  margin: 15px;
`;
const branchOption = [
  {
    id:uuidv4(),
    name: 'chapinero',
  },
  {
    id:uuidv4(),
    name: 'centro',
  },
  {
    id:uuidv4(),
    name: 'norte',
  },
]
const rangeOption = [
  {
    id:uuidv4(),
    range: '1 hora',
  },
  {
    id:uuidv4(),
    range: '2 horas',
  },
  {
    id:uuidv4(),
    range: '3 horas',
  },
]

function ReservationForm (){

  const dispatch = useDispatch()
  
  const data = useSelector(
    ({reservationReducer: {
      ...state
    }}) => {
      return {
        ...state
      }
  })

  const toNumber = (range) => {
    let splited = range.split(' ')
    return Number(splited[0])
  }

  const handleChange = (e) => {
    const { name, value, type, checked} = e.target;
    switch (name) {
      case 'branch':
        dispatch(setBranch(value))
        break;
      case 'date':
        dispatch(setDate(value))
        break;
      case 'time':
        dispatch(setTime(value))
        break;
      case 'range':
        dispatch(setRange(toNumber(value)))
        break;
      case 'people':
        dispatch(setPeople(value))
        break;
      case 'agree':
        if(type==='checkbox'){
        dispatch(setAgree(checked))
        }
        break;
      default:
        break;
    }
  };

  let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/restaurants/${data.id}/reservation/shopping-cart`)
  };

  const register = useContext(AuthContext)

  return (
    <>
      <ContainerList>
        <SectionHeader>
          <RestaurantName>
            {data.name}
          </RestaurantName>
          <RestaurantLogo
            src={logo}
          />
        </SectionHeader>
      </ContainerList>
      <ContainerList>
        <form
          onSubmit={handleSubmit}
          id="reservation"
        >
          <ReservationContainer>
            <TitleParagraph>
              puedes seleccionar tu menu antes de llegar si deseas 
            </TitleParagraph>
            <InputContainer>
              <Label
                className="Form__reservation-branch-label"
                htmlFor="branch"
              >
                Sucursal
              </Label>
              <Article>
                <SelectForm
                  className="Form__reservation-branch-select"
                  name="branch"
                  id="branch"
                  form="reservation"
                  value={data.branch}
                  onChange={ handleChange }
                  autoFocus
                  required
                > 
                  <option
                    value="" disabled selected
                  >
                    Seleccionar Sucursal
                  </option>
                  {!!branchOption && branchOption.length > 0 && branchOption.map(({id, name})=>{
                    return (
                      <option key={id}>
                        {name}
                      </option>
                    )
                  })
                  }
                </SelectForm>
              </Article>
            </InputContainer>
            <InputContainer>
              <Label 
                className="Form__reservation-date-label"
                htmlFor="date"
              >
                Selecciona el dia de reserva
              </Label>
            <div>
              <Article>
              <FontAwesomeIcon icon="calendar-alt" />
              <Input
                className="Form__reservation-date-input"
                id="date"
                name="date"
                type='date'
                value={data.date}
                onChange={ handleChange }
                required
                />
            </Article>
            </div>
            </InputContainer>
            <InputContainer>
              <Label
                className="Form__reservation-time-label"
                htmlFor="time"
              >
                Selecciona la hora de reserva
              </Label>
              <Article>
                <FontAwesomeIcon icon="clock" />
              <Input
                className="Form__reservation-time-input"
                id="time"
                name="time"
                type="time"
                value={data.time}
                onChange={ handleChange }
                min="7:00"
                max="23:00"
                required
              />
            </Article>
            </InputContainer>
            <InputContainer>
              <Label
                className="Form__reservation-range-label"
                htmlFor="time-range"
              >
                Cuanto tiempo te reservamos
              </Label>
              <Article>
              <SelectForm
                className="Form__reservation-range-select"
                name="range"
                id="range"
                form="reservation"
                value={data.range}
                onChange={ handleChange }
                required
              > 
                <option
                  value="" disabled selected
                >
                  Tiempo de Reserva
                </option>
                {!!rangeOption && rangeOption.length > 0 && rangeOption.map(({id, range})=>{
                  return (
                    <option key={id}>
                      {range}
                    </option>
                  )
                })
                }
              </SelectForm>
            </Article>
            </InputContainer>
            <Span>
              <PeopleContainer>
                <Label
                  className="Form__reservation-people-label"
                  htmlFor="people"
                >
                  Para cuantas personas te reservamos
                </Label>
                <Article>
                  <FontAwesomeIcon icon="user" />
                  <InputPeople
                    className="Form__reservation-people-input"
                    name="people"
                    id="people"
                    type="number"
                    value={data.people}
                    min="1"
                    form="reservation"
                    onChange={ handleChange}
                    required/>
                </Article>
              </PeopleContainer>
            </Span>
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
                  checked={data.agree}
                  onChange={handleChange}
                  required
                />
              </ArticleCheck>
            </Span>
            <Span>
              <ButtonPrimary
                type="submit"
                value="Agregar mi reserva al carrito"
              />
            </Span>
          </ReservationContainer>
        </form>
        <Span>
          <LinkSanitaryUpdate 
            type='button'
            onClick={register.onOpenModal}
          >
            Actualizar registro sanitario
          </LinkSanitaryUpdate>
          <SanitaryRegister/>
        </Span>
        <Span>
          <LinkSanitaryUpdate 
            type="button"
            onClick={register.onOpenModal}
          >
            Agregar registro sanitario de mis compañeros
          </LinkSanitaryUpdate>
          <SanitaryRegisterCompanion/>
        </Span>
      </ContainerList>
    </>
  )
}

export default ReservationForm
