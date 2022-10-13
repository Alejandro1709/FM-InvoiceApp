import InvoiceItem from '../InvoiceItem/invoice-item';
import * as S from './styles';

function InvoiceList({ invoices }) {
  return (
    <S.InvoiceList>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </S.InvoiceList>
  );
}

export default InvoiceList;
