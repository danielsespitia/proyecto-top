import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ContainerContent from '../components/styled/ContainerContent';
import ButtonPrimary from '../components/styled/ButtonPrimary';
import YourProfile  from '../components/rpf/YourProfile';

const ContainerProfile = styled(ContainerContent) `
  text-align: center;
`;

const RestLogo = styled.img `
  width: 100px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ContainerButton = styled.span `
  text-align: center;
`;

const profileData = [{
    id: uuidv4(),
    restaurantName: 'Burguer Mania',
    address: 'Calle 5a #45-32',
    phone: '3205670231',
    scheduleFrom: '11:00',
    scheduleTo: '23:00',
    deposit: 30000,
  }];

class RestaurantProfile extends Component {

  state = {
    profileData: profileData
  }

  render () {
    const { profileData } = this.state

    return (
      <>
        {!!profileData && profileData.map(({ id, restaurantName, address, phone, scheduleFrom, scheduleTo, deposit }) => {
          return (
            <ContainerProfile>
              <h1>Tu Perfil</h1>
              <RestLogo 
                src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
                alt="logo"
              />
              <YourProfile
                key={id}
                restaurantName={restaurantName}
                address={address}
                phone={phone}
                scheduleFrom={scheduleFrom}
                scheduleTo={scheduleTo}
                deposit={deposit}
              />
              <ContainerButton className="Profile__edit-span">
                <ButtonPrimary
                  className="Profile__edit-input"
                  type="submit"
                  value="Editar tu Perfil"
                />
              </ContainerButton>
            </ContainerProfile>
            )
          })}
      </>
    )
  }
}

export default RestaurantProfile