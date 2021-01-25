import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/styled/ButtonPrimary'

export const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const RestLogo = styled.img `
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: line;
  margin-left: auto;
  margin-right: auto;
`;

export const BodyRight = styled.div ` 
  grid-area: bodyRight;
  text-align: center;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MyLinkToMore = styled(Link)`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;
export const LogoButton = styled(ButtonPrimary)`
  margin-top: 20px;
  padding: 6px 7px;
`;
