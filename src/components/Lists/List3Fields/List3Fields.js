import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './List3Fields.css';

class List extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
      <div style={{backgroundColor: this.props.backgroundColor}} className={s.container}>
        <div className={s.contentField}>
          <span style={{color: this.props.colorField1}} className={s.text}>{this.props.field1}</span>
        </div>
        <div className={s.contentField}>
          <span style={{color: this.props.colorField2}} className={s.text}>{this.props.field2}</span>
        </div>
        <div className={s.contentField}>
          <span style={{color: this.props.colorField3}} className={s.text}>{this.props.field3}</span>
        </div>
      </div>
      </a>
    );
  }
}

List.defaultProps = {
  field1: 'Field 1',
  field2: 'Field 2',
  field3: 'Field 3',
  backgroundColor: '#fff',
  colorField1: '#2B2F3E',
  colorField2: '#2B2F3E',
  colorField3: '#2B2F3E',
  link: '',
};

export default withStyles(s)(List);
