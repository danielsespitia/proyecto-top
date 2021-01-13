import styled from 'styled-components'

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
`;

export const BodyRight = styled.div ` 
  grid-area: bodyRight;
  padding: 0px;
  height: 25rem;
  width: 40rem
`;

export const Select = styled.select ` 
  margin-left: 2rem;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: #6c757d;
`;

export const ImageDecor = styled.img `
  width: 20rem;
  margin: auto;
`;

export const H1 = styled.h1 `
  text-align: center;
  border-style: none none groove;
`;

export const Filter = styled.div `
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Booking = styled.div `
  display:grid;
  width: 40rem;
  height: 5rem;
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
  background: #FBF8F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ButtonTracker = styled.button `
  font-weight: bold;
  background: rgba(119, 65, 255, 0.5);
  border: 3px solid #7741FF;
  box-sizing: border-box;
  border-radius: 10px 0px 0px 10px;
`;

export const ButtonChat = styled.button `
  font-weight: bold;
  background: rgba(119, 65, 255, 0.5);
  border: 3px solid #7741FF;
  box-sizing: border-box;
`;

export const InfoBooking = styled.div `
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;

`;

export const ShowBooking = styled.button `
  font-weight: bold;
  background: #7741FF;
  border: none;
`;

export const ButtonCancel = styled.button `
  font-weight: bold;
  background: #ECC30D;
  border-radius: 0px 10px 10px 0px;
  border: none;
`;

export const ImgRestaurant = styled.img `
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 100%;
  display: block;
  margin-right: 1rem;
`;

export const DataRestaurant = styled.div `
  display: grid;
`;

export const Name = styled.p `
  margin: 0;
  height: 1rem;
  font-weight: bold;
`;

export const Address = styled.p `
  margin: 0;
  height: 1rem;
`;

export const Date = styled.p `
  margin: 0;
  height: 1rem;
`;