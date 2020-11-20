import styled from 'styled-components'

const ButtonPrimary = styled.input`
  background-color: ${
    props => props.theme.primaryColor
  };
  padding: 8px 14px;
  border-radius: 4px;
  color: white;
  font-weight: 400;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: ${
      props => props.theme.primaryColorBlur
    };
    border: 1px solid ${
      props => props.theme.primaryColor
    };
  }
`;

export default ButtonPrimary