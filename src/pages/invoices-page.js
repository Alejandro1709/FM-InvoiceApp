import { Fragment } from 'react';
import Header from '../components/Header';
import InvoiceList from '../components/InvoiceList';
import { invoices } from '../data';

function InvoicesPage() {
  return (
    <Fragment>
      <Header />
      <InvoiceList invoices={invoices} />
    </Fragment>
  );
}

export default InvoicesPage;
