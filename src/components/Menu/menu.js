import AppLogo from '../AppLogo';
import Moon from '../../assets/icon-moon.svg';
import * as S from './styles';

function Menu() {
  return (
    <S.Menu>
      <S.MenuMain>
        <AppLogo />
        <S.Moon src={Moon} alt='moon' draggable={false} />
      </S.MenuMain>
      <S.AvatarHolder>
        <S.Avatar
          src='https://avatars.githubusercontent.com/u/1164541?v=4'
          alt='avatar'
          draggable={false}
        />
      </S.AvatarHolder>
    </S.Menu>
  );
}

export default Menu;
