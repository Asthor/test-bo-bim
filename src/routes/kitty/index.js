import React from 'react';
import Layout from '../../components/Layout';
import Kitty from './Kitty';

const title = 'Cagnottes';

function action() {
  return {
    chunks: ['kitty'],
    title,
    component: (
      <Layout>
        <Kitty/>
      </Layout>
    ),
  };
}

export default action;
