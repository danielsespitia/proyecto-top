import styled from 'styled-components';
import ContainerContent from '../styled/ContainerContent';
import ButtonPrimary from '../styled/ButtonPrimary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContainerAbout = styled(ContainerContent)`
  margin: revert;
  position: relative;
  top: 30px;
  left: 30px;
  width: 560px;
  text-align: center;
`;

export const ButtonAddDish = styled(ButtonPrimary)`
  position: relative;
  top: 45px;
  left: 70vw;
  width: fit-content;
  font-size: 14px;
  padding: 6px 16px;
`;

export const AddIcon = styled(FontAwesomeIcon)`
  opacity: .9;
  margin-right: 7px;
`;

export const BodyLeft = styled(ContainerContent)`
  width: fit-content;
  padding: 0;
  margin: 20px 0;
`;

export const BodyRight = styled(ContainerContent)`
  width: fit-content;
  padding: 0;
  margin: 20px 0;
  background-color: revert;
  border-radius: revert;
  box-shadow: revert;
  overflow-y: scroll;
  height: 100vh;
`;