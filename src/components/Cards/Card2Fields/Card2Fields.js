import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card2Fields.css';
import MdZoomIn from 'react-icons/lib/md/zoom-in';

class List2Fields extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <a href={this.props.link}>
          <div className={s.header}>
            <span className={s.title}>{this.props.title}</span>
            <MdZoomIn size={23} color="white"/>
          </div>
        </a>
        <div className={s.subHeader}>
          <span className={s.text}>{this.props.sub1}</span>
          <span className={s.text}>{this.props.sub2}</span>
        </div>
        <div className={s.lineContainer}>{this.props.children}</div>
      </div>
    );
  }
}

List2Fields.defaultProps = {
  title: 'Catégorie',
  sub1: 'Sub1',
  sub2: 'Sub2',
  link: '',
};

export default withStyles(s)(List2Fields);
