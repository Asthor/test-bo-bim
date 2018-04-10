import React from 'react';
import Layout from '../../components/Layout';
import Users from './Users';


const title = 'Utilisateurs';

function action() {
  return {
    chunks: ['users'],
    title,
    component: (
      <Layout>
        <Users/>
      </Layout>
    ),
  };
}

export default action;
