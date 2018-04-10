import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListGoodDeal.css';
import imgUrl from './img.png';

class ListGoodDeal extends React.Component {
  render() {
    return (
      <div className={s.container} onClick={this.props.onClick}>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field1}</span>
        </div>
        <div className={s.contentFieldSpecial}>
          <span className={s.text}>{this.props.field21}</span>
          <span className={s.text}>{this.props.field22}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field3}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field4}</span>
        </div>
        <div className={s.contentField}>
          <img
            src={imgUrl}
            width="60 "
            height="60"
            alt="React"
          />
        </div>
        <div className={s.contentField}>
          <div style={{backgroundColor: this.props.stateColor}} className={s.statutContainer}>
            <span className={s.statut}>{this.props.statut}</span>
          </div>
        </div>
      </div>
    );
  }
}

ListGoodDeal.defaultProps = {
  field1: 'Nom du commerce',
  field21: 'du 00/00/0000 à 00:00',
  field22: 'au 00/00/0000 à 00:00',
  field3: '30%',
  field4: 'Nom du Bon plan',
  statut: 'Actif',
  stateColor: '#5fa613',
};

export default withStyles(s)(ListGoodDeal);
