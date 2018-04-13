import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListPartnershipPayment.css';

class ListPartnershipPayment extends React.Component {
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
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field5}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field6}</span>
        </div>
        <div className={s.contentField}>
          <div style={{backgroundColor: this.props.stateColor}} className={s.statutContainer}>
            <span className={s.statut}>{this.props.statut}</span>
          </div>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field7}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field8}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field9}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field10}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field11}</span>
        </div>
      </div>
    );
  }
}

ListPartnershipPayment.defaultProps = {
  field1: 'le 00/00/0000 à 00:00',
  field2: 'le 00/00/0000 à 00:00',
  field3: '---',
  field4: 'Nom commerce',
  field5: 'Prénom + Nom',
  field6: 'PP0000000',
  field7: '0,00€',
  field8: '0,00€',
  field9: '0,00€',
  field10: '0,00€',
  field11: '0,00€',
  link: '',
  stateColor: '#5fa613',
  statut: 'Validé',
};

export default withStyles(s)(ListPartnershipPayment);
