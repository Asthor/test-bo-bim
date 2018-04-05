import React from 'react';
import Layout from '../../components/Layout';
import GeneralView from './GeneralView';

const title = 'GeneralView';

function action() {
  return {
    chunks: ['general-view'],
    title,
    component: (
      <Layout>
        <GeneralView />
      </Layout>
    ),
  };
}

export default action;
