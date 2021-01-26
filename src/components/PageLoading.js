import Loading from '../image/loading.svg';
import styled from 'styled-components';

const ContainerLoading = styled.div`
  background: linear-gradient(rgb(144 141 141 / 50%),rgb(234 234 234 / 60%)), url('https://res.cloudinary.com/alamesa/image/upload/v1611610292/UI/alamesaloading_hrzaql.jpg');
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PageLoading() {
  return(
    <ContainerLoading>
      <img
        src={Loading}
        alt="Imagen para visulizar cargando"
      />
    </ContainerLoading>
  )
}

export default PageLoading