import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListPartnership.css';

class ListPartnership extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field1}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field2}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field3}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field4}</span>
        </div>
      </div>
    );
  }
}

ListPartnership.defaultProps = {
  field1: 'Prénom + Nom',
  field2: 'Prénom + Nom',
  field3: '0,00€',
  field4: 'le 00/00/0000 à 00:00',
  link: '',
};

export default withStyles(s)(ListPartnership);
