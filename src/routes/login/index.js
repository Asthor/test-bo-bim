import React from 'react';
import Layout from '../../components/Layout';
import Login from './Login';

const title = 'Connexion';

function action() {
  return {
    chunks: ['Connexion'],
    title,
    component: (
      <Layout>
        <Login title={title} />
      </Layout>
    ),
  };
}

export default action;
