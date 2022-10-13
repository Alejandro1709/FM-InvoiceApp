import InvoiceBody from '../InvoiceBody/invoice-body';
import StatusBoard from '../StatusBoard';
import * as S from './styles';

function InvoiceDetail() {
  return (
    <S.InvoiceDetail>
      <StatusBoard />
      <InvoiceBody />
    </S.InvoiceDetail>
  );
}

export default InvoiceDetail;
