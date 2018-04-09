import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavigationCard.css';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

class NavigationCard extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.content}>
          <a href={this.props.prev}>
            <div className={s.buttonPrev}>
              <FaAngleDoubleLeft size={18} color="white"/>
            </div>
          </a>
          <div className={s.pages}>
            <span className={s.text}>{this.props.page}</span>
          </div>
          <a href={this.props.next}>
            <div className={s.buttonNext}>
              <FaAngleDoubleRight size={18} color="white"/>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

NavigationCard.defaultProps = {
  page: '0/0',
  prev: '',
  next: '',
};

export default withStyles(s)(NavigationCard);
