import React from 'react';
import Layout from '../../components/Layout';
import Notifications from './Notifications';

const title = 'Notifications';

function action() {
  return {
    chunks: ['notifications'],
    title,
    component: (
      <Layout>
        <Notifications/>
      </Layout>
    ),
  };
}

export default action;
