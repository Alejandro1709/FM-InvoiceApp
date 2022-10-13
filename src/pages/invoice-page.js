import React, { Fragment } from 'react';
import StatusBar from '../components/StatusBar';
import InvoiceDetail from '../components/InvoiceDetail';

function InvoicePage() {
  return (
    <Fragment>
      <StatusBar />
      <InvoiceDetail />
    </Fragment>
  );
}

export default InvoicePage;
