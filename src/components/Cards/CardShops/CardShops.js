import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardShops.css';

class CardShops extends React.Component {
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
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardShops.defaultProps = {
  title: 'Catégorie',
  sub1: 'Image',
  sub2: 'Nom',
  sub3: 'Ville',
  sub4: 'Cagnotte générée',
  sub5: 'Statut',
};

export default withStyles(s)(CardShops);
