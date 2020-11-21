import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${
  props => props.theme.primaryColor
  };
  align-items: center;
  box-shadow: 1px 0px 2px 2px #707070;
  color: white;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  width: 100vw;
  left: 0;
  right: 0;
`;

const LinkTwitter = styled.a`
  text-decoration: underline;
  color: white;
`;

const TextLeft = styled.p`
  margin-left: 57px;
`;

const TextRight = styled.p`
  margin-right: 57px;
`;

export function Footer() {
  return(
    <FooterContainer>
      <TextLeft>
        © 2020 #ALAMESA, <strong>Todos los derechos reservados</strong>
      </TextLeft>
      <TextRight>
        Diseñado con ♥ por <LinkTwitter href='/home'>@AlamesaTv7</LinkTwitter>
      </TextRight>
    </FooterContainer>
  )
}