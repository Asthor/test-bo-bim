import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabDetails.css';

function openField(evt, fieldName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(fieldName).style.display = "block";
  evt.currentTarget.className += " active";
}

class TabDetails extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.tab}>
          <button className={s.tablinks} onclick="openField(event, 'Field1')">Menu1</button>
          <button className={s.tablinks} onclick="openField(event, 'Field2')">Menu2</button>
          <button className={s.tablinks} onclick="openField(event, 'Field3')">Menu3</button>
        </div>

        <div id="Field1" className={s.tabcontent}>
          <h3>Title 1</h3>
          <p>Description</p>
        </div>

        <div id="Field2" className={s.tabcontent}>
          <h3>Title 2</h3>
          <p>Description</p>
        </div>

        <div id="Field3" className={s.tabcontent}>
          <h3>Title 3</h3>
          <p>Description</p>
        </div>
      </div>
    );
  }
}

TabDetails.defaultProps = {

};

export default withStyles(s)(TabDetails);
