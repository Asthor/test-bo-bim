import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardKitty.css';

class CardKitty extends React.Component {
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
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardKitty.defaultProps = {
  title: 'Categorie',
  sub1: 'Date envoie',
  sub2: 'Date réception',
  sub3: 'Montant',
  sub4: 'Statut',
  sub5: 'Nom émetteur',
  sub6: 'Numéros émetteur',
  sub7: 'Nom destinataire',
  sub8: 'Numéros destinataire',
};

export default withStyles(s)(CardKitty);
