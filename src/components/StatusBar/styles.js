import styled from '@emotion/styled';
import { Link } from 'wouter';

export const StatusBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  font-weight: bold;
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
