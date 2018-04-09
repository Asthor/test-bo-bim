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
import s from './Payments.css';
import CardPayments from '../../components/Cards/CardPayments';
import ListPayment from '../../components/Lists/ListPayment';
import Button from '../../components/Button';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaListAlt from 'react-icons/lib/fa/list-alt';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';

class Payments extends React.Component {
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
            <div className={s.buttonContainerRight}>
              <Button title='Export CSV' backgroundColor='#4D7CAE'>
              </Button>
              <Button title='Filtrer' backgroundColor='#4D7CAE'>
                <FaListAlt size={20} color="white"/>
              </Button>
            </div>
          </div>
          <CardPayments title="Paiements">
            <ListPayment stateColor='orange' statut='En attente'/>
            <ListPayment stateColor='orange' statut='En attente'/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment stateColor='red' statut='Annulé'/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
            <ListPayment/>
          </CardPayments>
          <NavigationCard/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Payments);
