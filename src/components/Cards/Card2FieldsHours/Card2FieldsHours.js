import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card2FieldsHours.css';

class Card2FieldsHours extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.subHeader}>
          <span className={s.text}>{this.props.sub1}</span>
          <span className={s.text}>{this.props.sub2}</span>
        </div>
        <div className={s.lineContainer}>{this.props.children}</div>
      </div>
    );
  }
}

Card2FieldsHours.defaultProps = {
  title: 'Catégorie',
  sub1: 'Sub1',
  sub2: 'Sub2',
  link: '',
};

export default withStyles(s)(Card2FieldsHours);
