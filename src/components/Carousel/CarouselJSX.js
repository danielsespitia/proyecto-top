import { useState, useRef } from 'react'
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
  Carousel,
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

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

  const toLeft = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  const toRight = () =>{
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
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
            <Carousel
              translate={translate}
              transition={transition}
              width={getWidth()* props.slides.length}
            >
              {!!data.restaurantList && data.restaurantList.length > 0 && data.restaurantList.map(({ _id, name, logo }) => {
                return (
                  <Item>
                    {!logo ? 
                    (
                    <Logo
                      src= "https://image.freepik.com/vector-gratis/compre-nosotros-somos-senal-abierta_52683-38092.jpg"
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
            </Carousel>
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