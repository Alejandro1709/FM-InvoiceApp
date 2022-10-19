import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'wouter';
import * as S from './styles';

function StatusBar() {
  return (
    <S.StatusBar>
      <S.SLink to='/'>
        <FiChevronLeft />
        Go Back
      </S.SLink>
    </S.StatusBar>
  );
}

export default StatusBar;
