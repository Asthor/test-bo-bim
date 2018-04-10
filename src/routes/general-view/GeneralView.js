import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GeneralView.css';
import Card3Fields from '../../components/Cards/Card3Fields';
import List3Fields from '../../components/Lists/List3Fields';
import List2Fields from '../../components/Lists/List2Fields';
import Card2Fields from '../../components/Cards/Card2Fields';

class GeneralView extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.firstContainer}>
            <Card2Fields title="Dashboard" sub1="Données" sub2="Valeur">
              <List2Fields field1='Période' field2='du 00/00/0000 au 00/00/00000'>
              </List2Fields>
              <List2Fields field1='Nombre utilisateurs' field2='0'>
              </List2Fields>
              <List2Fields field1='Nombre de paiments' field2='0'>
              </List2Fields>
              <List2Fields field1='Somme paiements' field2='0,00€'>
              </List2Fields>
            </Card2Fields>
            <Card3Fields title="Utilisateurs" sub1="Prénom" sub2="Nom" sub3="Inscription" link="/users">
              <List3Fields field1="Prénom" field2="Nom" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom" field2="Nom" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom" field2="Nom" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom" field2="Nom" field3="00/00/0000" backgroundColor='#FDFDEB'/>
              <List3Fields field1="Prénom" field2="Nom" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom" field2="Nom" field3="00/00/0000" backgroundColor='#E8FFC1'/>
            </Card3Fields>
            <Card3Fields title="Paiements" sub1="Nom" sub2="Commerce" sub3="Montant" link="/payments">
              <List3Fields field1="Prénom + Nom" field2="Nom Commerce" field3="0,00€" backgroundColor='#FDFDEB'/>
              <List3Fields field1="Prénom + Nom" field2="Nom Commerce" field3="0,00€" backgroundColor='#FDFDEB'/>
              <List3Fields field1="Prénom + Nom" field2="Nom Commerce" field3="0,00€" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom + Nom" field2="Nom Commerce" field3="0,00€" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom + Nom" field2="Nom Commerce" field3="0,00€" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Prénom + Nom" field2="Nom Commerce" field3="0,00€" backgroundColor='#FFB6B9'/>
            </Card3Fields>
            <Card3Fields title="Cagnottes" sub1="Emetteur" sub2="Destinataire" sub3="Montant" link="/kitty">
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="0,00€"/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="0,00€"/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="0,00€"/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="0,00€"/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="0,00€"/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="0,00€"/>
            </Card3Fields>
            <Card3Fields title="Parrainages" sub1="Parrain" sub2="Filleul" sub3="Statut" link="/partnerships">
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="Crédité" colorField3='green'/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="En attente" colorField3='orange'/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="Crédité" colorField3='green'/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="Crédité" colorField3='green'/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="Crédité" colorField3='green'/>
              <List3Fields field1="Prénom + Nom" field2="Prénom + Nom" field3="Crédité" colorField3='green'/>
            </Card3Fields>
            <Card3Fields title="Notifications" sub1="Titre" sub2="Nom" sub3="Date" link="/notifications">
              <List3Fields field1="Titre Notification" field2="Prénom + Nom" field3="à 00:00 le 00/00"/>
              <List3Fields field1="Titre Notification" field2="Prénom + Nom" field3="à 00:00 le 00/00"/>
              <List3Fields field1="Titre Notification" field2="Prénom + Nom" field3="à 00:00 le 00/00"/>
              <List3Fields field1="Titre Notification" field2="Prénom + Nom" field3="à 00:00 le 00/00"/>
              <List3Fields field1="Titre Notification" field2="Prénom + Nom" field3="à 00:00 le 00/00"/>
              <List3Fields field1="Titre Notification" field2="Prénom + Nom" field3="à 00:00 le 00/00"/>
            </Card3Fields>
            <Card2Fields title="Commerces" sub1="Commerce" sub2="Ville" link="/shops">
              <List2Fields field1="Nom commerce" field2="Ville"/>
              <List2Fields field1="Nom commerce" field2="Ville"/>
              <List2Fields field1="Nom commerce" field2="Ville"/>
              <List2Fields field1="Nom commerce" field2="Ville"/>
              <List2Fields field1="Nom commerce" field2="Ville"/>
              <List2Fields field1="Nom commerce" field2="Ville"/>
            </Card2Fields>
            <Card3Fields title="Bons plans" link="/good-deals">
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
            </Card3Fields>
            <Card3Fields title="Virements" sub1="Commerce" sub2="Montant" sub3="Date">
              <List3Fields field1="Nom commerce" field2="0,00€" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Nom commerce" field2="0,00€" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Nom commerce" field2="0,00€" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Nom commerce" field2="0,00€" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Nom commerce" field2="0,00€" field3="00/00/0000" backgroundColor='#E8FFC1'/>
              <List3Fields field1="Nom commerce" field2="0,00€" field3="00/00/0000" backgroundColor='#E8FFC1'/>
            </Card3Fields>
            <Card3Fields title="Administration">
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
            </Card3Fields>
            <Card3Fields title="Factures">
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
              <List3Fields/>
            </Card3Fields>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(GeneralView);
