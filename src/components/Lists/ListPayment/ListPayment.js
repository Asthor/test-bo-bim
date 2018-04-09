import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListPayment.css';

class ListPayment extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field1}</span>
        </div>
        <div className={s.contentField}>
          <div style={{backgroundColor: this.props.stateColor}} className={s.statutContainer}>
            <span className={s.statut}>{this.props.statut}</span>
            <span className={s.date}>{this.props.date}</span>
        </div>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field2}</span>
        </div>
        <div className={s.contentField}>
          <a href={this.props.link}>
          <span className={s.text}>{this.props.field3}</span>
          </a>
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
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field8}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field9}</span>
        </div>
      </div>
    );
  }
}

ListPayment.defaultProps = {
  field1: 'le 00/00/0000 à 00:00',
  statut: 'Validé',
  date:'le 00/00/0000 à 00:00',
  field2: 'Nom commerce',
  field3: 'Prénom + Nom',
  field4: 'PP0000000',
  field5: '0,00€',
  field6: '0,00€',
  field7: '0,00€',
  field8: '0,00€',
  field9: '0,00€',
  link: '',
  stateColor: '#5fa613',
};

export default withStyles(s)(ListPayment);
