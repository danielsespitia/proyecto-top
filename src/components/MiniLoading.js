import styled from 'styled-components';
import Loading from '../image/loading.svg';

const ContainerMiniLoading = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
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