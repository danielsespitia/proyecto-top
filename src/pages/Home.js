import coverPcAlamesa from '../image/coverPcAlamesa.png'
import styled from 'styled-components'

const ContainerFigure = styled.figure`
  display: flex;
  justify-content: center;
`;

function Home () {
  return (
      <ContainerFigure>
        <img src={coverPcAlamesa} alt='Cover de Alamesa reservas'/>
      </ContainerFigure>
  )
}

export default Home