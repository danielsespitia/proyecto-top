import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContainerDish = styled.article`
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 5px 16px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 13px;
`;

export const IconDish = styled(FontAwesomeIcon)`
  margin: 0 13px;
  color: ${
    props => props.theme.primaryColor
  };
`;

export const ButtonAction = styled.button`
  border: none;
  & :focus {
    outline: none;
  };
  & :hover {
    color: ${
    props => props.theme.primaryColorBlur
    };
  };
`;

export const ButtonActionUp = styled(ButtonAction)`
  margin-bottom: 14px;
`;

export const ParragraphPrice = styled.p`
  color: ${
    props => props.theme.primaryColor
  };
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const ParragraphQuantity = styled(ParragraphPrice)`
  color: black;
  letter-spacing: 0px;
`;

export const ParragraphNumber = styled.p`
  border: 1px solid ${
    props => props.theme.grayColorMore
  };
  padding: 6px;
  margin: 3px 0 0 0;
  border-radius: 4px;
  background-color: white;
`;