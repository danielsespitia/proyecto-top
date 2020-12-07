import styled from 'styled-components'

export const Form = styled.form ` 
  display: grid;
  grid-row-gap: 12px;
`;

export const Input = styled.input ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;
export const Select = styled.select ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: #6c757d;
`;
export const ContainerTerms = styled.span ` 
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size: 14px;
`;
export const ContainerButton = styled.span `
  text-align: center;
`;

export const Error = styled.span `
  font-size: 12px;
  color: red;
  font-style: italic;
`;