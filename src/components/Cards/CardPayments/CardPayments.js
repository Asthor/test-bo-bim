import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardPayments.css';

class CardPayments extends React.Component {
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
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardPayments.defaultProps = {
  title: 'Catégorie',
  sub1: 'Date Paiement',
  sub2: 'Date encaissement',
  sub3: 'Partenaire',
  sub4: 'Utilisateur',
  sub5: 'N° Operation',
  sub6: 'Montant à encaisser',
  sub7: 'Cagnotte à réduire',
  sub8: 'Montant encaissé',
  sub9: 'Montant généré',
  sub10: 'Parrainage utilisé',
};

export default withStyles(s)(CardPayments);
