import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Shops.css';
import Button from '../../components/Button';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import CardShops from '../../components/Cards/CardShops/CardShops';
import ListShop from '../../components/Lists/ListShop/ListShop';
import CardDetails from '../../components/Cards/CardDetails';
import TabDetailsShop from '../../components/TabDetailsShop';

class Shops extends React.Component {
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
          <CardShops title='Commerces'>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop statut='Inactif' stateColor='red'/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
            <ListShop/>
          </CardShops>
          <NavigationCard/>
          <CardDetails title={this.props.shopName}>
            <TabDetailsShop/>
          </CardDetails>
        </div>
      </div>
    );
  }
}

Shops.defaultProps = {
  shopName: 'Nom commerce',
};
export default withStyles(s)(Shops);
