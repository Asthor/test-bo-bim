import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.link}>
          <div style={{backgroundColor: this.props.backgroundColor}} className={s.container}>
            <div className={s.content}>
              {this.props.children}
              <span className={s.title}>{this.props.title}</span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  title: 'Button',
  backgroundColor: '#bac9df',
  link: '',
};

export default withStyles(s)(Button);
