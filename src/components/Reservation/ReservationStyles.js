import styled from 'styled-components'
import ContainerContent from '../../components/styled/ContainerContent'
import ButtonPrimary from '../styled/ButtonPrimary'

export const ContainerReserve = styled(ContainerContent)`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 20px;
`;
export const ContainerPaymentZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerTotal = styled(ContainerContent)`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  font-weight: bold;
`;
export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const SectionMenuDetails = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
`;
export const SectionRestaurantDetails = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
`;
export const Th = styled.th`
  text-align: left;
  padding-left: 15px;
`;
export const TdItem = styled.td`
  padding: 15px;
  text-align: left;
`;
export const TdRestaurantDetails  = styled.td`
  padding: 15px;
  text-align: left;
  font-weight: bold;
`;
export const TdItemTotal = styled.td`
  padding: 15px;
  font-weight: bold;
  text-align: left;
`;
export const TdPrice = styled.td`
  text-align: right;
`;
export const TdTotalPrice = styled.td`
  font-weight: bold;
  text-align: right;
`;

export const Span = styled.span`
display: block;
text-align: center;
margin: 15px;
`;

export const LinkSanitaryUpdate = styled.button`
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

export const ButtonSecundary = styled(ButtonPrimary)`
  background-color: ${
    props => props.theme.tertiaryColor
  };
  margin-left: 17px;
  &:hover {
    background-color: #E2DE5B;
    border: 1px solid ${
      props => props.theme.tertiaryColor
    };
  }
`
