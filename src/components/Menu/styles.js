import styled from '@emotion/styled';

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background-color: #373b53;
`;

export const MenuMain = styled.div`
  display: flex;
  flex: 0.9;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #494e6e;
`;

export const AvatarHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  flex: 0.1;
  /* padding: 24px 20px; */
`;

export const Moon = styled.img`
  margin-right: 18px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
