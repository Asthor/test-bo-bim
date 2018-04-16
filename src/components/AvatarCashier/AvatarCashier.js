import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AvatarCashier.css';
import UserIconUrl from './UserIcon.png';

class AvatarCashier extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div style={{backgroundColor: this.props.stateColor}} className={s.header}>
          <span className={s.statut}>{this.props.statut}</span>
        </div>
        <div className={s.content}>
          <img
            src={UserIconUrl}
            width="80 "
            height="80"
            alt="React"
          />
          <span className={s.text}>{this.props.firstName}</span>
          <span className={s.text}>{this.props.name}</span>
        </div>
      </div>
    );
  }
}

AvatarCashier.defaultProps = {
  firstName: 'Prénom',
  name: 'Nom',
  statut: 'Actif',
  stateColor: '#5fa613',
};

export default withStyles(s)(AvatarCashier);
