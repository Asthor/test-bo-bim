import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PartnershipsPayments.css';
import CardPartnershipsPayments from '../../components/Cards/CardPartnershipsPayments';
import ListPartnershipPayment from '../../components/Lists/ListPartnershipPayment';
import Button from '../../components/Button';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaListAlt from 'react-icons/lib/fa/list-alt';

class PartnershipsPayments extends React.Component {
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
              <FaChevronLeft size={16} color="white"/>
            </Button>
            <div className={s.buttonContainerRight}>
              <Button title='Parrainages' backgroundColor='#5fa613' link="/partnerships">
              </Button>
              <Button title='Filtrer' backgroundColor='#4D7CAE'>
                <FaListAlt size={20} color="white"/>
              </Button>
            </div>
          </div>
          <CardPartnershipsPayments title="Paiements parrainés ">
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment statut="Annulé" stateColor="red"/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
            <ListPartnershipPayment/>
          </CardPartnershipsPayments>
          <NavigationCard/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PartnershipsPayments);
