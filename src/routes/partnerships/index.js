import React from 'react';
import Layout from '../../components/Layout';
import Partnerships from './Partnerships';

const title = 'Parrainages';

function action() {
  return {
    chunks: ['partnerships'],
    title,
    component: (
      <Layout>
        <Partnerships/>
      </Layout>
    ),
  };
}

export default action;
