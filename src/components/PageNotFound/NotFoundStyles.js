import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerError = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(243 240 240 / 50%),rgb(234 234 234 / 60%)), url(https://res.cloudinary.com/alamesa/image/upload/v1610992887/UI/Dise%C3%B1o_sin_t%C3%ADtulo_ytkgna.png);
`;

export const Image = styled.img`
  width: 35vw;
  border-radius: 50%;
`;

export const ContainerText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 15px;
  margin: 0 15px;
  border-radius: 8px;
`;

export const RedirectText = styled(Link)`
  text-decoration: underline;
  color: #fff;
  font-weight: 600;
`;