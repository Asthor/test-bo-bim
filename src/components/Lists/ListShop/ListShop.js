import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListShop.css';
import imgUrl from './img.png';

class ListUser extends React.Component {
  render() {
    return (
      <div className={s.container} onClick={this.props.onClick}>
        <div className={s.contentField}>
          <img
            src={imgUrl}
            width="60 "
            height="60"
            alt="React"
          />
        </div>
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
      </div>
    );
  }
}

ListUser.defaultProps = {
  field1: 'Nom du commerce',
  field2: 'Ville',
  field3: '10%',
  statut: 'Actif',
  stateColor: '#5fa613',
};

export default withStyles(s)(ListUser);
