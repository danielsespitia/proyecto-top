import { useState } from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {
  ContainerFather,
  TitleCarousel,
  Title,
  MainContainer,
  ButtonLeft,
  ButtonRight,
  CarouselContainer,
  Item,
  Logo,
  Name,
  ButtonVisit
} from './CarouselStyles';

export function CarouselJSX () {

  const data = useSelector(
    ({reservationReducer: {
      ...state
    }}) => {
      return { ...state } 
    })
    
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    activeIndex : 0,
    translate: 0,
    transition: 0.45
  })

  const carousel = {
    transform: `translateX(-${state.translate}px)`,
    transition: `transform ease-out ${state.transition}s`,
    display: 'flex',
  }
  const { activeIndex } = state

  const toRight = () => {
    if ( activeIndex === data.restaurantList.length - 1 ) {
      return setState ({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex) * (0.2 * getWidth())
    })
  }

  const toLeft = () => {
    if( activeIndex === 0 ) {
      return setState({
        ...state,
        translate: data.restaurantList.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * (0.2 * getWidth())
    })
  }
  
  return(
    <>
      <ContainerFather>
        <TitleCarousel>
          <Title>
            Restaurantes aliados
          </Title>
        </TitleCarousel>

        <MainContainer>
          <ButtonLeft
            onClick= {toLeft}
          >
           <FontAwesomeIcon icon={faAngleLeft} />
          </ButtonLeft>
          <CarouselContainer>
            <div 
              style={carousel}
            >
              {!!data.restaurantList && data.restaurantList.length > 0 && data.restaurantList.map(({ _id, name, logo }) => {
                return (
                  <Item
                    key = { _id }
                  >
                    {!logo ? 
                    (
                    <Logo
                      src= "https://res.cloudinary.com/alamesa/image/upload/v1611677267/Restaurant-Logo/tqtd8kiu9jvylmx3aiph.png"
                      alt= "Logo restaurante"
                    />
                    ) : (
                    <Logo
                      src= {logo}
                      alt= "Logo restaurante"
                    />
                    )}
                    <Name>
                      <p>{name}</p>
                    </Name>
                    <ButtonVisit>Visitanos</ButtonVisit>
                  </Item>
                )
              })}
            </div>
          </CarouselContainer>
          <ButtonRight
            onClick= {toRight}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </ButtonRight>
        </MainContainer>
      </ContainerFather>
    </>
  )
}