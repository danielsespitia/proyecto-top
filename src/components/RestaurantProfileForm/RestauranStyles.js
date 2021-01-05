import styled from 'styled-components';
import ButtonPrimary from '../styled/ButtonPrimary';

export const Container = styled.div `
  text-align: left;
`;

export const SignUpData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DataItem = styled.div`
  grid-row-gap: 5px;
`;

export const Form = styled.form `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 0px;
`;

export const Label = styled.label `
  display: block;
`;

export const Input = styled.input ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

export const ContentButtons = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  padding-block-start: 40px;
`;

export const ButtonUpdate = styled(ButtonPrimary)`
  margin-right: 50px;
`;

export const ButtonCancel = styled(ButtonPrimary)`
  background-color: ${
    props => props.theme.tertiaryColor
  };
  &:hover {
    background-color: #E2DE5B;
    border: 1px solid ${
      props => props.theme.tertiaryColor
    };
  }
  margin-left: 50px;
`;