import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Notifications.css';
import Button from '../../components/Button';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaBellO from 'react-icons/lib/fa/bell-o';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import CardNotifications from '../../components/Cards/CardNotifications/CardNotifications';
import ListNotification from '../../components/Lists/ListNotification/ListNotification';


class Notifications extends React.Component {
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
            <Button title='Créer' backgroundColor='#5fa613'>
              <FaBellO size={20} color="white"/>
            </Button>
          </div>
          <CardNotifications title='Notifications'>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
            <ListNotification/>
          </CardNotifications>


          <NavigationCard/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Notifications);
