import React from 'react';
import Layout from '../../components/Layout';
import GoodDeals from './GoodDeals';

const title = 'Bons Plans';

function action() {
  return {
    chunks: ['good-deals'],
    title,
    component: (
      <Layout>
        <GoodDeals/>
      </Layout>
    ),
  };
}

export default action;
