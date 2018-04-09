import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListUser.css';
import UserIconUrl from './UserIcon.png';

class ListUser extends React.Component {
  render() {
    return (
      <div className={s.container} onClick={this.props.onClick}>
        <div className={s.contentField}>
          <img
            src={UserIconUrl}
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

ListUser.defaultProps = {
  field1: 'Mail Address',
  field2: 'First name',
  field3: 'Name',
  field4: '0,00€',
  field5: '0,00€',
  field6: '00/00/0000 (00 ans)',
  field7: '00/00/0000 à 00:00',
  statut: 'Paiement effectué',
  stateColor: '#5fa613',
};

export default withStyles(s)(ListUser);
