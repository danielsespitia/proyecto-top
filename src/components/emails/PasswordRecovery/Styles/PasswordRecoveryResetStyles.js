import styled from 'styled-components'
import ContainerContent from '../../../styled/ContainerContent'

export const ContainerContentExtend = styled(ContainerContent)` 
  display: grid;
  grid-row-gap: 12px;
`;

export const Form = styled.form ` 
  display: grid;
  grid-row-gap: 12px;
  margin-top: 12px;
`;
export const ContainerButton = styled.span `
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Input = styled.input ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

export const ContainerContentLabel = styled(ContainerButton)`
  display: block;
  margin-bottom: 12px;
`;

export const Message = styled.span `
  font-size: 12px;
  color: red;
  font-style: italic;
`;
