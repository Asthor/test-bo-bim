import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardPartnershipsPayments.css';

class CardPartnershipsPayments extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.title}>{this.props.title}</span>
        </div>
        <div className={s.subHeader}>
          <span className={s.text}>{this.props.sub1}</span>
          <span className={s.text}>{this.props.sub2}</span>
          <span className={s.text}>{this.props.sub3}</span>
          <span className={s.text}>{this.props.sub4}</span>
          <span className={s.text}>{this.props.sub5}</span>
          <span className={s.text}>{this.props.sub6}</span>
          <span className={s.text}>{this.props.sub7}</span>
          <span className={s.text}>{this.props.sub8}</span>
          <span className={s.text}>{this.props.sub9}</span>
          <span className={s.text}>{this.props.sub10}</span>
          <span className={s.text}>{this.props.sub11}</span>
          <span className={s.text}>{this.props.sub12}</span>
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardPartnershipsPayments.defaultProps = {
  title: 'Catégorie',
  sub1: 'Date Paiement',
  sub2: 'Date encaissement',
  sub3: 'Date annulation',
  sub4: 'Partenaire',
  sub5: 'Utilisateur',
  sub6: 'N° Opération',
  sub7: 'Statut',
  sub8: 'Montant à encaisser',
  sub9: 'Cagnotte à réduire',
  sub10: 'Montant encaissé',
  sub11: 'Cagnotte générée',
  sub12: 'Parrainage utilisé',
};

export default withStyles(s)(CardPartnershipsPayments);
