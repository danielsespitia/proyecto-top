import styled from 'styled-components';
import Loading from '../image/loading.svg';

const ContainerMiniLoading = styled.div`
  width: 43vw;
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MiniLoading() {
  return (
    <ContainerMiniLoading>
      <img
        src={Loading}
        alt="Imagen para visulizar cargando"
      />
    </ContainerMiniLoading>
  )
}

export default MiniLoading