import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GoodDeals.css';
import Button from '../../components/Button';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import CardGoodDeals from '../../components/Cards/CardGoodDeals/CardGoodDeals';
import ListGoodDeal from '../../components/Lists/ListGoodDeal/ListGoodDeal';

class GoodDeals extends React.Component {
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
            <Button title='Ajouter' backgroundColor='#5fa613'>
              <MdAddCircleOutline size={20} color="white"/>
            </Button>
          </div>
          <CardGoodDeals title='Bons plans'>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal statut='Inactif' stateColor='red'/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal statut='Inactif' stateColor='red'/>
            <ListGoodDeal statut='Inactif' stateColor='red'/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
            <ListGoodDeal/>
          </CardGoodDeals>
          <NavigationCard/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(GoodDeals);
