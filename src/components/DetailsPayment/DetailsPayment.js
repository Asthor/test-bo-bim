import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DetailsPayment.css';
import imgUrl from './img.png';

class DetailsPayment extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.infosContainer}>
          <div className={s.img}>
            <img
              src={imgUrl}
              width="120 "
              height="120"
              alt="React"
            />
          </div>
          <div className={s.infosRight}>
            <span className={s.shopName}>{this.props.shopName}</span>
            <span className={s.date}>{this.props.date}</span>
            <div style={{backgroundColor: this.props.stateColor}} className={s.statutContainer}>
              <span className={s.statePayment}>{this.props.statePayment}</span>
            </div>
          </div>
        </div>
        <div className={s.listContainer}>
          <div className={s.list}>
            <span className={s.text}>{this.props.field1}</span>
            <span className={s.text}>{this.props.field2}</span>
          </div>
          <div className={s.list}>
            <span className={s.text}>{this.props.field3}</span>
            <span className={s.text}>{this.props.field4}</span>
          </div>
          <div className={s.list}>
            <span className={s.text}>{this.props.field5}</span>
            <span className={s.text}>{this.props.field6}</span>
          </div>
          <div className={s.list}>
            <span className={s.text}>{this.props.field7}</span>
            <span className={s.text}>{this.props.field8}</span>
          </div>
          <div className={s.list}>
            <span className={s.text}>{this.props.field9}</span>
            <span className={s.text}>{this.props.field10}</span>
          </div>
        </div>
        <div className={s.buttonContainer}>
          <button className={s.buttonCancel}>Annuler le paiement</button>
        </div>
      </div>
    );
  }
}

DetailsPayment.defaultProps = {
  shopName: 'Nom du commerce',
  date: 'le 00/00/0000 à 00:00',
  statePayment: 'statePayment',
  stateColor: '#5fa613',

  field1: 'Montant commande (TTC)',
  field2: '0,00€',

  field3: 'Montant Montant parrainage à déduire',
  field4: '0,00€',

  field5: 'Montant cagnotte à déduire',
  field6: '0,00€',

  field7: 'Montant débité',
  field8: '0,00€',

  field9: 'Gains générés',
  field10: '0,00€',
};

export default withStyles(s)(DetailsPayment);
