import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardDetails.css';
import FaClose from 'react-icons/lib/fa/close';
import FaBookmark from 'react-icons/lib/fa/bookmark';

class CardDetails extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.title}>{this.props.title}</span>
          <FaClose size={23} color="white"/>
        </div>
        <div className={s.content}>
          {this.props.children}
        </div>
      </div>

    );
  }
}

CardDetails.defaultProps = {
  title: 'Modal Name',
  menuTitle: 'Menu Name',
};

export default withStyles(s)(CardDetails);
