import styled from 'styled-components'

const ContainerContent = styled.div ` 
  width: 274px;
  margin: 50px auto;
  background-color: ${
  props => props.theme.grayColorOverlay
  };
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export default ContainerContent