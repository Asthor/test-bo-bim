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
          <div className={s.menu}>
              <div className={s.contentMenu}>
                <FaBookmark size={23} color="#9FACBF"/>
            <span className={s.text}>{this.props.menuTitle}</span>
              </div>
            <div className={s.contentMenu}>
              <FaBookmark size={23} color="#9FACBF"/>
              <span className={s.text}>{this.props.menuTitle}</span>
            </div>
            <div className={s.contentMenu}>
              <FaBookmark size={23} color="#9FACBF"/>
              <span className={s.text}>{this.props.menuTitle}</span>
            </div>
            <div className={s.contentMenu}>
              <FaBookmark size={23} color="#9FACBF"/>
              <span className={s.text}>{this.props.menuTitle}</span>
            </div>
          </div>
          <div className={s.mainContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

CardDetails.defaultProps = {
  title: 'Modal Name',
  menuTitle:'Menu Name',
};

export default withStyles(s)(CardDetails);
