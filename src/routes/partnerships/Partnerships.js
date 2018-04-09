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
import s from './Partnerships.css';
import CardPartnerships from '../../components/Cards/CardPartnerships';
import ListPartnership from '../../components/Lists/ListPartnership';
import Button from '../../components/Button';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaListAlt from 'react-icons/lib/fa/list-alt';

class Partnerships extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.buttonsContainer}>
            <Button
              title="Retour"
              backgroundColor="#2B2F3E"
              link="/general-view"
            >
              <FaChevronLeft size={16} color="white" />
            </Button>
            <Button title="Filtrer" backgroundColor="#4D7CAE">
              <FaListAlt size={20} color="white" />
            </Button>
          </div>
          <CardPartnerships title="Parrainages">
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
            <ListPartnership />
          </CardPartnerships>
          <NavigationCard/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Partnerships);
