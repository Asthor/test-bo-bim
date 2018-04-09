import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Users.css';
import CardUsers from '../../components/Cards/CardUsers';
import ListUser from '../../components/Lists/ListUser';
import Button from '../../components/Button';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaListAlt from 'react-icons/lib/fa/list-alt';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import { Modal } from 'react-bootstrap';
import CardDetails from '../../components/Cards/CardDetails';


class Users extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  state = {modal: false}
  openModal = () => {
    this.setState({modal:true})
  }

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
            <ListUser onClick={this.openModal}/>
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
            <ListUser/>
            <ListUser/>
            <ListUser/>
            <ListUser/>
            <ListUser/>
            <ListUser/>
            <ListUser/>
            <ListUser/>
          </CardUsers>
          <NavigationCard/>
        </div>
      <CardDetails>
        <label className={s.label} htmlFor="usernameOrEmail">
          Adresse email:
          <input
            className={s.input}
            id="usernameOrEmail"
            type="text"
            name="usernameOrEmail"
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
          />
        </label>
      </CardDetails>
      </div>
    );
  }
}

export default withStyles(s)(Users);
