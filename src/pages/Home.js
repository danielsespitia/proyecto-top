import coverPcAlamesa from '../image/coverPcAlamesa.png';
import {CarouselJSX} from '../components/Carousel/CarouselJSX';
import styled from 'styled-components';

const ContainerFigure = styled.figure`
  display: flex;
  justify-content: center;
  max-height: 40vh;
`;

const Img = styled.img`
  object-fit: contain;
`;

function Home () {
  return (
    <>
      <ContainerFigure>
        <Img src={coverPcAlamesa} alt='Cover de Alamesa reservas'/>
      </ContainerFigure>
      <CarouselJSX>
      </CarouselJSX>
    </>
  )
}

export default Home