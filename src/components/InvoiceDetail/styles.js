import styled from '@emotion/styled';

export const InvoiceDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  user-select: none;
  margin-bottom: 56px;
`;

export const InvoiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 6px;
  background-color: white;
  gap: 30px;
  user-select: none;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Code = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;

export const Hash = styled.span`
  display: flex;
  flex-direction: row;
  color: #7e88c3;
`;

export const Type = styled.span`
  color: #7e88c3;
`;

export const Address = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: #7e88c3;
`;

export const AddressTwo = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: #7e88c3;
  font-size: 15px;
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Date = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const SendTo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
