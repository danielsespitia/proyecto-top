import styled from 'styled-components'

const DesktopStructure = styled.div ` 
  display: grid;
  padding: 40px 30px;
  grid-gap: 60px;
  //grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "bodyLeft bodyRight bodyRight bodyRight"
`;


export default DesktopStructure
