import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListShopPayment.css';

class ListShopPayment extends React.Component {
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
          <div style={{backgroundColor: this.props.stateColor}} className={s.statutContainer}>
            <span className={s.statut}>{this.props.statut}</span>
          </div>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field5}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field5}</span>
        </div>
      </div>
    );
  }
}

ListShopPayment.defaultProps = {
  field1: 'le 00/00/0000 à 00:00',
  field2: 'le 00/00/0000 à 00:00',
  field3: 'Nom utilisateur',
  statut: 'Validé',
  field5: '0,00€',
  field6: '0,00€',
  stateColor: '#5fa613',
};

export default withStyles(s)(ListShopPayment);
