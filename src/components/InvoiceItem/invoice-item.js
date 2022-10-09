import * as S from './styles';

function InvoiceItem({ invoice }) {
  return (
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
  );
}

export default InvoiceItem;
