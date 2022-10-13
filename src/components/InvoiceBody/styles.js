import styled from '@emotion/styled';

export const InvoiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

export const TypeTwo = styled.span`
  color: #7e88c3;
  font-weight: bold;
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

export const Date2 = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

export const SendTo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TotalCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafe;
  border-radius: 8px;
  padding: 24px;
  gap: 24px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;

export const RowHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GrandHold = styled.div`
  background-color: #373b53;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 31px 24px;
`;
