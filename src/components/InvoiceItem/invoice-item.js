import { Link } from 'wouter';
import * as S from './styles';

function InvoiceItem({ invoice }) {
  return (
    <Link to={`/invoices/${invoice.id.toLowerCase()}`}>
      <S.InvoiceItem>
        <S.ItemTop>
          <S.TopLeft>
            #<S.Code>{invoice.id}</S.Code>
          </S.TopLeft>
          <S.Author>{invoice.clientName}</S.Author>
        </S.ItemTop>
        <S.ItemBottom>
          <S.BotLeft>
            <S.Date>Due 19 Aug 2021</S.Date>
            <h2>£ {invoice.total}</h2>
          </S.BotLeft>
          <S.StatusButton>
            <S.Dot />
            {invoice.status}
          </S.StatusButton>
        </S.ItemBottom>
      </S.InvoiceItem>
    </Link>
  );
}

export default InvoiceItem;
