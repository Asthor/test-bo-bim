import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardPartnerships.css';

class CardPartnerships extends React.Component {
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
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CardPartnerships.defaultProps = {
  title: 'Categorie',
  sub1: 'Parrain',
  sub2: 'Filleul',
  sub3: 'Parrainage',
  sub4: 'Date de parrainage',
};

export default withStyles(s)(CardPartnerships);
