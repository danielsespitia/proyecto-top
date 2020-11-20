import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Desktopstructure from '../components/styled/DesktopStructure';
import ButtonPrimary from '../components/styled/ButtonPrimary';
import YourProfile  from '../components/rpf/YourProfile';

const RestLogo = styled.img `
  width: 100px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BodyRight = styled.div ` 
  grid-area: bodyRight;
  text-align: center;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

const MyOfficesAnchor = styled.a`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;

const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-block-start: 40px;
`;

const profileData =
  {
    id: uuidv4(),
    restaurantName: 'Burguer Mania',
    address: 'Calle 5a #45-32',
    phone: '3205670231',
    scheduleFrom: '11:00',
    scheduleTo: '23:00',
    deposit: 30000,
  }

class RestaurantProfile extends Component {

  state = {
    profileData: profileData
  }

  render () {
    const { profileData } = this.state

    return (
      <>
      <Desktopstructure>
        <BodyLeft>
          <H3>Tu Perfil</H3>
          <RestLogo 
            src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
            alt="logo"
          />
          <MyOfficesAnchor>Sucursales</MyOfficesAnchor>
        </BodyLeft>
        <BodyRight>
          <YourProfile
            key={profileData.id}
            restaurantName={profileData.restaurantName}
            address={profileData.address}
            phone={profileData.phone}
            scheduleFrom={profileData.scheduleFrom}
            scheduleTo={profileData.scheduleTo}
            deposit={profileData.deposit}
          />
          <ContentButtons className="Profile__edit-span">
            <ButtonPrimary
              className="Profile__edit-input"
              type="submit"
              value="Editar tu Perfil"
            />
          </ContentButtons>
        </BodyRight>
      </Desktopstructure>
      </>
    )
  }
}

export default RestaurantProfile