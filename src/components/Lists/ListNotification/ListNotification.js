import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListNotification.css';
import imgUrl from './img.png';

class ListNotification extends React.Component {
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
          <span className={s.text}>{this.props.field4}</span>
        </div>
        <div className={s.contentField}>
          <span className={s.text}>{this.props.field5}</span>
        </div>
      </div>
    );
  }
}

ListNotification.defaultProps = {
  field1: 'Titre Notification',
  field2: 'Message descriptif de la notification',
  field3: 'Prénom + Nom',
  field4: '0',
  field5: '00/00/0000',
};

export default withStyles(s)(ListNotification);
