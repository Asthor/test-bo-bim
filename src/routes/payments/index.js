import React from 'react';
import Layout from '../../components/Layout';
import Payments from './Payments';

const title = 'Paiements';

function action() {
  return {
    chunks: ['payments'],
    title,
    component: (
      <Layout>
        <Payments/>
      </Layout>
    ),
  };
}

export default action;
