import styled from 'styled-components';
import ButtonPrimary from '../components/styled/ButtonPrimary';
import SanitaryRegister from '../pages/SanitaryRegister'
import { AuthContext } from '../store/AuthContext'
import { useContext } from 'react'

const ReservationContainer = styled.div `
  height: 15rem;
  width: 37rem;
  left: 513px;
  top: 312px;
  margin-bottom: 20px;
  background: #FBF8F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const InfoContainer = styled.div `
  display: flex;
  justify-content: space-around;
  width: 85%;
`;

const PhotoContainer = styled.div `
  margin-left: 1rem;
`;

const ProfilePicture = styled.img `
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-top: 2rem;
`;

const TextContainer = styled.div `
  margin-top: 0.5rem;
  margin-right: 3rem;
`;

const TextItem = styled.p `
  margin: 0.5rem;
`;

const ButtonContainer = styled.div `
  margin-left: 2rem;
  margin-right: 2rem;
`;

const FirstColorButton = styled(ButtonPrimary) `
  background-color: #0F31DD;
  margin-left: 0.5rem;
`;

const SecondColorButton = styled(ButtonPrimary) `
  background-color: #ECC30D;
  margin-left: 0.5rem;
`;

const ThirdColorButton = styled(ButtonPrimary) `
  margin-left: 0.5rem;
`;

function ActiveReservations ( { data } ) {
  const register = useContext(AuthContext)
  return (
    <>
      {!!data.reservationData && 
      data.reservationData.reservations &&
      data.reservationData.reservations.length > 0 &&
      data.reservationData.reservations.map((reservation) => {
        return (
          <ReservationContainer>
            <InfoContainer>
              <PhotoContainer>
                <ProfilePicture
                  src="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"
                  alt="Foto perfil cliente" 
                />
              </PhotoContainer>
              <TextContainer>
                <TextItem><strong>{`${reservation.user.name} ${reservation.user.lastName}`}</strong></TextItem>
                <TextItem><strong>Teléfono: </strong> {reservation.user.phone}</TextItem>
                <TextItem><strong>Fecha: </strong> {reservation.date}</TextItem>
                <TextItem><strong>Hora: </strong> {reservation.time}</TextItem>
                <TextItem><strong>Número de Asistentes: </strong> {reservation.range}</TextItem> 
              </TextContainer>
            </InfoContainer>
            <ButtonContainer>
              <FirstColorButton
                type="button"
                value='Ver Orden'
              />
              <FirstColorButton
                type="button"
                onClick={register.onOpenModal}
                value="Registro Sanitario"
              />
              <SanitaryRegister/>
              <SecondColorButton
                type="button"
                value="Cancelar"
              />
              <ThirdColorButton
                type="button"
                value="Ir al Chat"
              />
            </ButtonContainer>
          </ReservationContainer>
        )
      })}
    </>
  )
}
export default ActiveReservations
