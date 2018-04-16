import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardShopPayments.css';

class CardShopPayments extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.subHeader}>
          <span className={s.text}>{this.props.sub1}</span>
          <span className={s.text}>{this.props.sub2}</span>
          <span className={s.text}>{this.props.sub3}</span>
          <span className={s.text}>{this.props.statut}</span>
          <span className={s.text}>{this.props.sub4}</span>
          <span className={s.text}>{this.props.sub5}</span>
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardShopPayments.defaultProps = {
  sub1: 'Date Paiement',
  sub2: 'Date encaissement',
  sub3: 'Utilisateur',
  statut: 'Statut',
  sub4: 'Montant à encaisser',
  sub5: 'Montant encaissé',
};

export default withStyles(s)(CardShopPayments);
