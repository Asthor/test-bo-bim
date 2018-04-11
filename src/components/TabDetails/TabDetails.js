import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabDetails.css';

class TabDetails extends React.Component {
  state = {
    selected : 0
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.tab}>
          <button className={s.tablinks} onClick={() => this.setState({selected : 0})}>Menu1</button>
          <button className={s.tablinks} onClick={() => this.setState({selected : 1})}>Menu2</button>
          <button className={s.tablinks} onClick={() => this.setState({selected : 2})}>Menu3</button>
        </div>
        {this.state.selected === 0 && <div className={s.tabcontent}>
          <h3>Title 1</h3>
          <p>Description</p>
        </div>}

        {this.state.selected === 1 && <div className={s.tabcontent}>
          <h3>Title 2</h3>
          <p>Description</p>
        </div>}

        {this.state.selected === 2&& <div className={s.tabcontent}>
          <h3>Title 3</h3>
          <p>Description</p>
        </div>}
      </div>
    );
  }
}

TabDetails.defaultProps = {

};

export default withStyles(s)(TabDetails);
