import styled from 'styled-components'

const DesktopStructure = styled.div ` 
  display: grid;
  padding: 40px 30px;
  grid-gap: 60px;
  grid-template-areas:
    "bodyLeft bodyRight";
  margin: auto;
  min-width: 1021px;
`;

export default DesktopStructure
