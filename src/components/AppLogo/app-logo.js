import Logo from '../../assets/logo.svg';
import styled from '@emotion/styled';
import * as S from './styles';

export const LogoIMG = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

function AppLogo() {
  return (
    <S.AppLogo>
      <S.LogoBot></S.LogoBot>
      <LogoIMG src={Logo} alt='Logo' />
    </S.AppLogo>
  );
}

export default AppLogo;
