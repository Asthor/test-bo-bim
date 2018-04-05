import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card3Fields.css';
import MdZoomIn from 'react-icons/lib/md/zoom-in'

class List3Fields extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <a href={this.props.link}>
        <div className={s.header}>
          <span className={s.title}>{this.props.title}</span>
          <div className={s.headerRight}>
              <MdZoomIn size={23} color="white"/>
          </div>
        </div>
        </a>
        <div className={s.subHeader}>
          <span className={s.text}>{this.props.sub1}</span>
          <span className={s.text}>{this.props.sub2}</span>
          <span className={s.text}>{this.props.sub3}</span>
        </div>
        <div className={s.listContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

List3Fields.defaultProps = {
  title: 'Catégorie',
  sub1: 'Sub1',
  sub2: 'Sub2',
  sub3: 'Sub3',
  link: '',
};

export default withStyles(s)(List3Fields);
