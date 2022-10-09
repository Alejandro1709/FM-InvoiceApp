import ChevronDown from '../../assets/icon-arrow-down.svg';
import { ReactComponent as Plus } from '../../assets/icon-plus.svg';
import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Left>
        <S.Heading>Invoices</S.Heading>
        <S.Paragraph>7 invoices</S.Paragraph>
      </S.Left>
      <S.Right>
        <S.Input>
          <S.FilterP>Filter</S.FilterP>
          <img src={ChevronDown} alt='arrow down' draggable={false} />
        </S.Input>
        <S.Button>
          <S.Plus>
            <Plus />
          </S.Plus>
          New
        </S.Button>
      </S.Right>
    </S.Header>
  );
}

export default Header;
