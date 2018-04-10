import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardNotifications.css';

class CardNotifications extends React.Component {
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

CardNotifications.defaultProps = {
  title: 'Catégorie',
  sub1: 'Image',
  sub2: 'Titre',
  sub3: 'Message',
  sub4: 'Nom',
  sub5: 'Statut',
  sub6: 'Date',
};

export default withStyles(s)(CardNotifications);
