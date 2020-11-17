import React from 'react'
import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'

const H3 = styled.h3`
  text-align: center;
`;


class ClientProfile extends React.Component {

  render(){
    return(
      <ContainerContent>
        <H3>Configura tu perfil</H3>

      </ContainerContent>
    )
  }
}

export default ClientProfile