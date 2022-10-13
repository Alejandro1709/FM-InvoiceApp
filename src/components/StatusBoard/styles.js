import { BsFillCircleFill } from 'react-icons/bs';
import styled from '@emotion/styled';

export const StatusBoard = styled.div`
  display: flex;
  justify-content: center;
  gap: 136px;
  padding: 24px 0;
  border-radius: 8px;
  width: 327px;
  background-color: white;
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
