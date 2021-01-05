import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RestLogo = styled.img `
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

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
  text-align: center;
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;