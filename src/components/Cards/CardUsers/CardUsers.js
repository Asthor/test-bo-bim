import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardUsers.css';

class CardUsers extends React.Component {
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
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardUsers.defaultProps = {
  title: 'Catégorie',
  sub1: 'Photo',
  sub2: 'E-mail',
  sub3: 'Prénom',
  sub4: 'Nom',
  sub5: 'Statut',
  sub6: 'Solde cagnotte',
  sub7: 'Parrainage',
  sub8: 'Date de naissance',
  sub9: 'Date d\'inscription',
};

export default withStyles(s)(CardUsers);
