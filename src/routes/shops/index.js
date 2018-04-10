import React from 'react';
import Layout from '../../components/Layout';
import Shops from './Shops';

const title = 'Commerces';

function action() {
  return {
    chunks: ['shops'],
    title,
    component: (
      <Layout>
        <Shops/>
      </Layout>
    ),
  };
}

export default action;
