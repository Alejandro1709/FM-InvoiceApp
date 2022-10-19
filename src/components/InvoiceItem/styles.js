import { BsFillCircleFill } from 'react-icons/bs';
import styled from '@emotion/styled';

export const InvoiceItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  background-color: white;
  user-select: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7e88c3;
`;

export const Code = styled.span`
  font-weight: 700;
  color: black;
  text-transform: uppercase;
`;

export const Author = styled.span`
  font-weight: 500;
  color: #858bb2;
  font-size: 12px;
`;

export const ItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotLeft = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Date = styled.p`
  color: #888eb0;
`;

export const StatusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: none;
  background-color: #f1fdfa;
  color: #33d69f;
  font-weight: 800;
  border-radius: 6px;
`;

export const Dot = styled(BsFillCircleFill)`
  font-size: 10px;
`;
