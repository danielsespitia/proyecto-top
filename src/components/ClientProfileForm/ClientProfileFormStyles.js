import styled from 'styled-components'
import ButtonPrimary from '../styled/ButtonPrimary'

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

export const BodyRight = styled.div ` 
  grid-area: bodyRight;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

export const TextSanitaryRegister = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

export const LinkToSanitaryRegister = styled.button`
  font-size: 16px;
  color: #2F80ED;
  border: 0px;
  text-decoration: underline;
  
  &:focus {
    background-color: white;
    border-radius: 4px;
    padding: 7px;
    outline: none;
  };
`;

export const PhotoClient = styled.img `
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 100%;
  display: line;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`;

export const FormItem = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

export const Input = styled.input ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Select = styled.select ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: #6c757d;
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
export const ImageButton = styled(ButtonPrimary)`
  margin-top: 20px;
  padding: 6px 7px;
`;
