import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabDetails.css';
import UserIconUrl from './UserIcon.png';

class TabDetails extends React.Component {
  state = {
    selected: 0,
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.tab}>
          <button
            className={s.tablinks}
            onClick={() => this.setState({ selected: 0 })}
          >
            {this.props.menu1}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({ selected: 1 })}
          >
            {this.props.menu2}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({ selected: 2 })}
          >
            {this.props.menu3}
          </button>
        </div>

        {/* PERSONAL INFORMATIONS */}

        {this.state.selected === 0 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Informations personnelles</span>
            <div className={s.identity}>
              <div className={s.left}>
                <img
                  className={s.img}
                  src={UserIconUrl}
                  width="120 "
                  height="120"
                  alt="React"
                />
              </div>
              <div className={s.right}>
                <span className={s.text}>Nom: Prénom + Nom</span>
                <span className={s.text}>Adresse mail: adresse@mail.com</span>
                <span className={s.text}>Téléphone: 00 00 00 00 00</span>
                <span className={s.text}>
                  Date de naissance: 00/00/0000 (00ans)
                </span>
                <span className={s.text}>Membre depuis le: 00/00/00</span>
                <span className={s.text}>Adresse: N° rue </span>
                <span className={s.text}>Code postal: 00 000 </span>
                <span className={s.text}>Ville: Nom de la ville </span>
              </div>
            </div>
            <button
              className={s.button}
              onClick={() => this.setState({ selected: 3 })}
            >
              {this.props.menu4}
            </button>
          </div>
        )}

        {/* FINANCIAL INFORMATIONS */}

        {this.state.selected === 1 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Informations financières</span>
          </div>
        )}

        {/* ADMINISTRATION */}

        {this.state.selected === 2 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Administration</span>
            <div className={s.adminContainer}>
              <div className={s.adminLeft}>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="password">
                    Mot de passe:
                    <input
                      className={s.input}
                      id="password"
                      type="password"
                      name="password"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    />
                  </label>
                </div>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="passwordconfirm">
                    Confirmation mot de passe:
                    <input
                      className={s.input}
                      id="passwordconfirm"
                      type="password"
                      name="passwordconfirm"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    />
                  </label>
                </div>
                <button
                  className={s.button}
                  onClick={() => this.setState({ selected: 3 })}
                >
                  {this.props.menu5}
                </button>
              </div>
              <div className={s.adminRight}>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="pincode">
                    Code PIN:
                    <input
                      className={s.input}
                      id="pincode"
                      type="password"
                      name="pincode"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    />
                  </label>
                </div>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="pincodeconfirm">
                    Confirmation code PIN:
                    <input
                      className={s.input}
                      id="pincodeconfirm"
                      type="password"
                      name="pincodeconfirm"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    />
                  </label>
                </div>
                <button
                  className={s.button}
                  onClick={() => this.setState({ selected: 3 })}
                >
                  {this.props.menu5}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PERSONAL INFORMATIONS SETTINGS */}

        {this.state.selected === 3 && (
          <div className={s.tabcontent}>
            <span className={s.title}>
              Modifier les informations personnelles
            </span>
            <div className={s.selectPhoto}>
              <span className={s.label}>Photo de profil:</span>
              <button className={s.buttonSelect}>Choisir un fichier</button>
            </div>
            <form method="post">
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="firstname">
                  Prénom:
                  <input
                    className={s.input}
                    id="firstname"
                    type="text"
                    name="firstname"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="name">
                  Nom:
                  <input
                    className={s.input}
                    id="name"
                    type="text"
                    name="name"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="mail">
                  Email:
                  <input
                    className={s.input}
                    id="mail"
                    type="text"
                    name="mail"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="phone">
                  Téléphone:
                  <input
                    className={s.input}
                    id="phone"
                    type="text"
                    name="phone"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="address">
                  Adresse:
                  <input
                    className={s.input}
                    id="address"
                    type="text"
                    name="address"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="addaddress">
                  Complément d'adresse:
                  <input
                    className={s.input}
                    id="addaddress"
                    type="text"
                    name="addaddress"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="zipcode">
                  Code postal:
                  <input
                    className={s.input}
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="city">
                  Ville:
                  <input
                    className={s.input}
                    id="city"
                    type="text"
                    name="city"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
            </form>
            <div className={s.buttonContainer}>
              <button
                className={s.buttonValid}
                onClick={() => this.setState({ selected: 0 })}
              >
                {this.props.menu5}
              </button>
              <button
                className={s.buttonCancel}
                onClick={() => this.setState({ selected: 0 })}
              >
                {this.props.menu6}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

TabDetails.defaultProps = {
  menu1: 'Informations personnelles',
  menu2: 'Informations financières',
  menu3: 'Administration',
  menu4: 'Modifier',
  menu5: 'Valider',
  menu6: 'Annuler',
};

export default withStyles(s)(TabDetails);
