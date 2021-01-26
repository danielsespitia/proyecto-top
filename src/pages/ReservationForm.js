import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContainerContent from '../components/styled/ContainerContent'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import { 
  setBranch, 
  setDate,
  setTime,
  setRange,
  setPeople,
  setAgree,
  createReservation
}
from '../store/actions/Reservation.actions'
import BadgeDish from '../components/BadgeDishReservation/BadgeDish'
import { getData, cleanDish } from '../store/actions/Menu.action'
import PageLoading from '../components/PageLoading'


const ContainerList = styled(ContainerContent)`
  width: auto;
  margin: 20px;
  text-align: center;
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

const ContainerDishes = styled.div`
  grid-column: 1/5;
`;

const ContainerSectionDishes = styled.section`
  display: grid;
  grid-template-columns: repeat(3, [col-start] minmax(100px, 1fr) [col-end]);
  grid-template-rows: 75px;
  grid-gap: 18px;
  justify-content: space-around;
`;

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

  useEffect(() => {
    const menuId = localStorage.getItem('menu')
    if(menuId) {
      dispatch(getData())
    }
    return () => {
      dispatch(cleanDish())
    }
  }, [dispatch])

  const { dishesList, loading } = useSelector(
    ({ menuReducer: { dishesList, loading }}) => ({ dishesList, loading }))

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
        dispatch(setRange(value))
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
    dispatch(createReservation(data))
    history.push(`/restaurants/${data.idRestaurantReservation}/reservation/shopping-cart`)
  };

  if(loading) return <PageLoading/>
  
  return (
    <>
      <ContainerList>
        <SectionHeader>
          <RestaurantName>
            {data.nameRestaurantReservation}
          </RestaurantName>
          <RestaurantLogo
            src={data.restaurantLogo}
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
            <ContainerDishes>
              <ContainerSectionDishes>
              {!!dishesList && dishesList.length > 0 ? dishesList.map(({_id, nameDish, price, description, category, file}) => {
                return (
                  <BadgeDish
                    key={_id}
                    id={_id}
                    nameDish={nameDish}
                    price={price}
                    description={description}
                    category={category}
                    file={file}
                  />    
                )
              }) : (
                <p>Este restaurante aún no tiene un menu disponible</p>
              )}
              </ContainerSectionDishes>
            </ContainerDishes>
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
                  Selecciona sucursal
                </option>
                <option
                  value='Principal'
                >
                  Principal
                </option>
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
                  Selecciona rango
                </option>
                <option
                  value='1'
                >
                  1 Hora
                </option>
                <option
                  value='2'
                >
                  2 Horas
                </option>
                <option
                  value='3'
                >
                  3 Horas
                </option>
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
      </ContainerList>
    </>
  )
}

export default ReservationForm
