import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabDetails.css';

class TabDetails extends React.Component {
  state = {
    selected: 0
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.tab}>
          <button className={s.tablinks} onClick={() => this.setState({selected: 0})}>{this.props.menu1}</button>
          <button className={s.tablinks} onClick={() => this.setState({selected: 1})}>{this.props.menu2}</button>
          <button className={s.tablinks} onClick={() => this.setState({selected: 2})}>{this.props.menu3}</button>
        </div>
        {this.state.selected === 0 && <div className={s.tabcontent}>
          <div className={s.identity}>
            <span className={s.title}>Coordonées</span>
            <span className={s.text}>Prénom + Nom</span>
            <span className={s.text}>Adresse mail</span>
            <span className={s.text}>00 00 00 00 00</span>
            <span className={s.text}>Né le 00/00/0000 (00ans)</span>
            <span className={s.text}>Membre depuis le 00/00/00</span>
            <span className={s.text}>Habite à Ville </span>
          </div>
        </div>}

        {this.state.selected === 1 && <div className={s.tabcontent}>
          <h3>Title 2</h3>
          <p>Description</p>
        </div>}

        {this.state.selected === 2 && <div className={s.tabcontent}>
          <h3>Title 3</h3>
          <p>Description</p>
        </div>}
      </div>
    );
  }
}

TabDetails.defaultProps = {
  menu1: 'Coordonnées',
  menu2: 'Informations financières',
  menu3: 'Administration',
};

export default withStyles(s)(TabDetails);
