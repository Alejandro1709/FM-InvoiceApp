import * as S from './styles';

function InvoiceBody() {
  return (
    <S.InvoiceInfo>
      <S.Header>
        <S.Code>
          <S.Hash>#</S.Hash>XM9141
        </S.Code>
        <S.Type>Graphic Design</S.Type>
      </S.Header>
      <S.Address>
        <li>19 Union Terrace</li>
        <li>London</li>
        <li>E1 3EZ</li>
        <li>United Kingdom</li>
      </S.Address>
      <S.MoreInfo>
        <S.Left>
          <S.DateSection>
            <S.Type>Invoice Date</S.Type>
            <S.Date>21 Aug 2021</S.Date>
          </S.DateSection>
          <S.DateSection>
            <S.Type>Payment Due</S.Type>
            <S.Date>20 Sep 2021</S.Date>
          </S.DateSection>
        </S.Left>
        <S.Right>
          <S.Type>Bill To</S.Type>
          <S.Date>Alex Grim</S.Date>
          <S.AddressTwo>
            <li>84 Church Way</li>
            <li>Bradford</li>
            <li>BD1 9PB</li>
            <li>United Kingdom</li>
          </S.AddressTwo>
        </S.Right>
      </S.MoreInfo>
      <S.SendTo>
        <S.Type>Send to</S.Type>
        <S.Date>alexgrim@mail.com</S.Date>
      </S.SendTo>
      <div>
        <S.TotalCard>
          <S.Row>
            <S.RowHead>
              <S.Date2>Banner Design</S.Date2>
              <S.TypeTwo>1 x £ 156.00</S.TypeTwo>
            </S.RowHead>
            <S.Date2>£ 400.00</S.Date2>
          </S.Row>
          <S.Row>
            <S.RowHead>
              <S.Date2>Banner Design</S.Date2>
              <S.TypeTwo>1 x £ 156.00</S.TypeTwo>
            </S.RowHead>
            <S.Date2>£ 400.00</S.Date2>
          </S.Row>
        </S.TotalCard>
        <S.GrandHold>dkdk</S.GrandHold>
      </div>
    </S.InvoiceInfo>
  );
}

export default InvoiceBody;
