import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardGoodDeals.css';

class CardGoodDeals extends React.Component {
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
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardGoodDeals.defaultProps = {
  title: 'Catégorie',
  sub1: 'Commerce',
  sub2: 'Période',
  sub3: 'Pourcentage de cagnotte générée',
  sub4: 'Titre',
  sub5: 'Photo',
  sub6: 'Statut',
};

export default withStyles(s)(CardGoodDeals);
