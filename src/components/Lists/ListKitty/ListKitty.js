import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListKitty.css';

class ListKitty extends React.Component {
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
          <span style={{color: this.props.stateColor}} className={s.statut}>{this.props.statut}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field4}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field5}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field6}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field7}</span>
        </div>
      </div>
    );
  }
}

ListKitty.defaultProps = {
  field1: '00/00/0000 à 00:00',
  field2: '00/00/0000 à 00:00',
  field3: '0,00€',
  statut: 'Validé',
  field4: 'Prénom + Nom',
  field5: '00 00 00 00 00',
  field6: 'Prénom + Nom',
  field7: '00 00 00 00 00',
  stateColor: 'green',
};

export default withStyles(s)(ListKitty);
