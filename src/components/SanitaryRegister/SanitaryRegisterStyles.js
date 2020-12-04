import styled from 'styled-components';
import ContainerContent from '../styled/ContainerContent';
import ButtonPrimary from '../styled/ButtonPrimary';

export const ContainerRegisterForm = styled(ContainerContent)`
  width: 280px;
  padding: 30px;
`;

export const Form = styled.form`
  display: grid;
  justify-content: center;
  grid-row-gap: 10px;
`;

export const H3 = styled.h3`
  text-align: center;
`;

export const ParagraphInstruction = styled.p`
  font-size: 14px;
`;

export const Paragraph = styled.p`
  font-size: 11px;
  color: #2F80ED;
  width: 150px;
`;

export const Span = styled.span ` 
  width: 274px;
  padding: 20px;
  background-color: ${
    props => props.theme.blueColorSan
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;  
`;

export const Checkbox = styled.input`
  border: 1px solid #CED4DA;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const Temperature = styled.input`
  margin: 15px 0;
  padding: 9px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  border-color: ${
    props => props.theme.grayColorMore
  };
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
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
  };
`;

export const ErrorSubmittion = styled.span`
  font-size: 12px;
  color: red;
  font-style: italic;
`;
export const Message = styled.span`
  font-size: 12px;
  color: #0f31dd;
  font-style: italic;
  font-weight: 800;
` ;