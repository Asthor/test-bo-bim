import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './List2Fields.css';

class ListContent2Fields extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.contentField}>
            <span className={s.text}>{this.props.field1}</span>
        </div>
        <div className={s.contentField}>
            <span className={s.text}>{this.props.field2}</span>
        </div>
      </div>
    );
  }
}

ListContent2Fields.defaultProps = {
  field1: 'Field 1',
  field2: 'Field 2',
};

export default withStyles(s)(ListContent2Fields);
