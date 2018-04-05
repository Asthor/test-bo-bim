/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Users.css';
import CardUsers from '../../components/Cards/CardUsers';
import ListUser from '../../components/Lists/ListUser';
import Button from '../../components/Button';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaListAlt from 'react-icons/lib/fa/list-alt';

class Users extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.buttonsContainer}>
            <Button title='Retour' backgroundColor='#2B2F3E' link='/general-view'>
              <FaChevronLeft size={16} color="white"/>
            </Button>
            <Button title='Filtrer' backgroundColor='#4D7CAE'>
              <FaListAlt size={20} color="white"/>
            </Button>
          </div>
          <CardUsers title="Utilisateurs">
            <ListUser/>
            <ListUser
              statut='CB enregistré'
              stateColor='orange'/>
            <ListUser/>
            <ListUser/>
            <ListUser
              statut='Aucune CB'
              stateColor='red'/>
            <ListUser/>
            <ListUser/>
            <ListUser
              statut='CB enregistré'
              stateColor='orange'/>
            <ListUser
              statut='CB enregistré'
              stateColor='orange'/>
            <ListUser/>
            <ListUser
              statut='Aucune CB'
              stateColor='red'/>
            <ListUser
              statut='Aucune CB'
              stateColor='red'/>
          </CardUsers>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Users);
