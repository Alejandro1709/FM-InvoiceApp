import React, { Fragment } from 'react';
import StatusBar from '../components/StatusBar';
import InvoiceDetail from '../components/InvoiceDetail';

function InvoicePage() {
  return (
    <Fragment>
      <StatusBar />
      <br />
      <InvoiceDetail />
    </Fragment>
  );
}

export default InvoicePage;
