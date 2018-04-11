import React from 'react';
import Layout from '../../components/Layout';
import PartnershipsPayments from './PartnershipsPayments';

const title = 'Paiements parrainés';

function action() {
  return {
    chunks: ['partnerships-payments'],
    title,
    component: (
      <Layout>
        <PartnershipsPayments/>
      </Layout>
    ),
  };
}

export default action;
