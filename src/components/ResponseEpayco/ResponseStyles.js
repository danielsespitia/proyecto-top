import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContainerResponse = styled.div`
  margin: 15px;
`;

export const TableResume = styled.table`
  margin: auto;
`;

export const TitleResponse = styled.h4`
  color: #159A09;
  margin-left: 20px;
  display: inline-block;
`;
export const IconCheck = styled(FontAwesomeIcon)`
  color: #159A09;
`;

export const RowColorPrimary = styled.tr`
  background-color: ${
    props => props.theme.primaryColor
  };
  color: white;
  font-weight: 600;
`;

export const TextConcept = styled.p`
  display: inline-block;
  margin: 0 15px;
`;

export const RowColorWhite = styled.tr`
  background-color: #fff;
`;

export const RowConcept = styled.td`
  display: flex;
  align-items: center;
`;

export const ColumnCell = styled.td`
  padding: 5px 10px;
  text-align: center;
`;

export const ColumnCellAlignStart = styled(ColumnCell)`
  text-align: start;
`;

export const ContainerResumeDate = styled.span`
  display: flex;
  align-items: center;
  margin: 17px auto;
`;

export const ContainerTextSafe = styled.div`
  width: 50%;
  p {
    font-weight: 800;
  };
`;

export const ContainerDate = styled.div`
  background: #fff;
  padding: 0 17px;
  border-radius: 7px;
  width: 40%;
`;

export const ContainerSuccesfullyStatus = styled.span`
  display: flex;
  align-items: center;
`;

export const TextImportant = styled.strong`
  color: ${
    props => props.theme.primaryColor
  };
`;

export const TextSuccesfully = styled.strong`
  color: #159A09;
`;