import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabDetailsShop.css';
import imgUrl from './img.png';
import Card2FieldsHours from '../../components/Cards/Card2FieldsHours';
import CardShopPayments from '../../components/Cards/CardShopPayments';
import List2Fields from '../../components/Lists/List2Fields';
import ListShopPayment from '../../components/Lists/ListShopPayment';
import NavigationCard from '../../components/Navigation/Navigation-Card/NavigationCard';
import AvatarCashier from '../../components/AvatarCashier';

class TabDetailsShop extends React.Component {
  state = {
    selected: 0,
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.tab}>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 0})}
          >
            {this.props.menu1}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 1})}
          >
            {this.props.menu2}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 2})}
          >
            {this.props.menu3}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 3})}
          >
            {this.props.menu4}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 4})}
          >
            {this.props.menu5}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 5})}
          >
            {this.props.menu6}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 6})}
          >
            {this.props.menu7}
          </button>
          <button
            className={s.tablinks}
            onClick={() => this.setState({selected: 7})}
          >
            {this.props.menu8}
          </button>
        </div>

        {/* COORDONNEES */}

        {this.state.selected === 0 && (
          <div className={s.tabcontent}>
            <span className={s.title}>{this.props.shopName}</span>
            <div className={s.identity}>
              <div className={s.left}>
                <img
                  className={s.img}
                  src={imgUrl}
                  width="120 "
                  height="120"
                  alt="React"
                />
              </div>
              <div className={s.right}>
                <span className={s.text}>Téléphone: {this.props.phoneNumber}</span>
                <span className={s.text}>Adresse: {this.props.address}</span>
                <span className={s.text}>Latitute: {this.props.latitude}</span>
                <span className={s.text}>Longitude: {this.props.longitude}</span>
                <span className={s.text}>Membre depuis le: {this.props.dateMember}</span>
                <button
                  className={s.buttonValid}
                  onClick={() => this.setState({selected: 3})}>Se connecter au compte
                </button>
              </div>
            </div>
            <div className={s.description}>
              <span className={s.title}>Description</span>
              <p className={s.text}>{this.props.description}</p>
            </div>
            <div className={s.buttonContainer}>
              <button
                className={s.button}
                onClick={() => this.setState({selected: 8})}>Modifier
              </button>
            </div>
          </div>
        )}

        {/* COORDONNEES BANCAIRES*/}

        {this.state.selected === 1 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Coordonnées bancaires</span>
            <span className={s.text}>IBAN: {this.props.iban}</span>
            <span className={s.text}>BIC: {this.props.bic}</span>
            <span className={s.text}>Nom de la banque: {this.props.bankName}</span>
            <div className={s.buttonContainer}>
              <button
                className={s.button}
                onClick={() => this.setState({selected: 3})}>Modifier
              </button>
            </div>
          </div>
        )}

        {/* INFORMATIONS FINANCIERES */}

        {this.state.selected === 2 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Informations financières</span>
            <div className={s.rowContainer}>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Nombre total de transactions</span>
                <span className={s.textContainer}>{this.props.totalTransactions}</span>
              </div>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Montant total à encaisser</span>
                <span className={s.textContainer}>{this.props.totalToCash}</span>
              </div>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Nombre de client</span>
                <span className={s.textContainer}>{this.props.totalClients}</span>
              </div>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Chiffre d'affaire total généré</span>
                <span className={s.textContainer}>{this.props.totalGains}</span>
              </div>
            </div>
          </div>
        )}

        {/* HORRAIRES */}

        {this.state.selected === 3 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Horraires</span>
            <Card2FieldsHours sub1='Jour' sub2='Heures ouverture'>
              <List2Fields field1={this.props.day1} field2={this.props.hours1}/>
              <List2Fields field1={this.props.day2} field2={this.props.hours2}/>
              <List2Fields field1={this.props.day3} field2={this.props.hours3}/>
              <List2Fields field1={this.props.day4} field2={this.props.hours4}/>
              <List2Fields field1={this.props.day5} field2={this.props.hours5}/>
              <List2Fields field1={this.props.day6} field2={this.props.hours6}/>
              <List2Fields field1={this.props.day7} field2={this.props.hours7}/>
            </Card2FieldsHours>
            <div className={s.buttonContainer}>
              <button
                className={s.button}
                onClick={() => this.setState({selected: 3})}>Modifier
              </button>
            </div>
          </div>
        )}

        {/* PAIEMENTS */}

        {this.state.selected === 4 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Paiements</span>
            <CardShopPayments>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
              <ListShopPayment/>
            </CardShopPayments>
            <NavigationCard/>
          </div>
        )}

        {/* FACTURATION */}

        {this.state.selected === 5 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Facturation</span>
            <div className={s.rowContainer}>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Commission bam</span>
                <span className={s.textContainer}>{this.props.bamCommission}</span>
              </div>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Commission bancaire</span>
                <span className={s.textContainer}>{this.props.bankCommission}</span>
              </div>
              <div className={s.containerAmounts}>
                <span className={s.titleContainer}>Pourcentage de cagnotte générée</span>
                <span className={s.textContainer}>{this.props.totalKitty}</span>
              </div>
            </div>
            <div className={s.buttonContainer}>
              <button
                className={s.button}
                onClick={() => this.setState({selected: 3})}>Modifier
              </button>
            </div>
          </div>
        )}

        {/* CAISSIERS */}

        {this.state.selected === 6 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Caissiers</span>
            <div className={s.rowContainer}>
              <AvatarCashier stateColor='red' statut='Inactif'/>
              <AvatarCashier/>
              <AvatarCashier/>
              <AvatarCashier/>
              <AvatarCashier/>
            </div>
            <div className={s.buttonContainer}>
              <button
                className={s.button}
                onClick={() => this.setState({selected: 3})}>Ajouter
              </button>
            </div>
          </div>
        )}

        {/* ADMINISTRATION */}

        {this.state.selected === 7 && (
          <div className={s.tabcontent}>
            <span className={s.title}>Représentant légal</span>
            <span className={s.text}>Nom: {this.props.name}</span>
            <span className={s.text}>Prénom: {this.props.firstName}</span>
            <span className={s.text}>Numéros de téléphone: {this.props.legalPhoneNumber}</span>
            <span className={s.text}>Email: {this.props.mail}</span>
            <div className={s.buttonContainer}>
              <button
                className={s.button}
                onClick={() => this.setState({selected: 3})}>Modifier
              </button>
            </div>
          </div>
        )}

        {/* SETTINGS COORDONNEES */}
        {this.state.selected === 8 && (
          <div className={s.tabcontent}>
            <span className={s.title}>
              Modifier les coordonnées
            </span>
            <div className={s.selectPhoto}>
              <span className={s.label}>Photo du commerce:</span>
              <button className={s.buttonSelect}>Choisir un fichier</button>
            </div>
            <form method="post">
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="shopName">
                  Nom du commerce:
                  <input
                    className={s.input}
                    id="shopName"
                    type="text"
                    name="shopName"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="siret">
                  Numéros SIRET:
                  <input
                    className={s.input}
                    id="siret"
                    type="text"
                    name="siret"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="phone">
                  Numéros de téléphone:
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
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="latitude">
                  Latitude:
                  <input
                    className={s.input}
                    id="latitude"
                    type="text"
                    name="latitude"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="longitude">
                  Longitude:
                  <input
                    className={s.input}
                    id="longitude"
                    type="text"
                    name="longitude"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </label>
              </div>
            </form>
            <div className={s.buttonContainer}>
              <button
                className={s.buttonCancel}
                onClick={() => this.setState({selected: 0})}
              >
                Annuler
              </button>
              <button
                className={s.buttonValid}
                onClick={() => this.setState({selected: 0})}
              >
                Valider
              </button>
            </div>
          </div>
        )}

      </div>
    );
  }
}

TabDetailsShop.defaultProps = {
  menu1: 'Coordonnées',
  menu2: 'Coordonnées bancaires',
  menu3: 'Informations financières',
  menu4: 'Horraires',
  menu5: 'Paiements',
  menu6: 'Facturation',
  menu7: 'Caissiers',
  menu8: 'Administration',

  shopName: 'Nom du commerce',
  phoneNumber: '00 00 00 00 00',
  address: 'N°rue, code postal, ville',
  latitude: '0000000000',
  longitude: '0000000000',
  dateMember: '00/00/0000',
  description: 'Texte de présentation du commerce.',

  iban: 'Numeros IBAN',
  bic: 'Numeros BIC',
  bankname: 'bankName',

  totalTransactions: '0',
  totalToCash: '0,00€',
  totalClients: '0',
  totalGains: '0,00€',

  bamCommission: '0,00€',
  bankCommission: '0,00€',
  totalKitty: '0,00€',

  name: 'Nom du représentant légal',
  firstName: 'Prénom',
  legalPhoneNumber: '00 00 00 00 00',
  mail: 'repsentant@legal.com',

  day1: 'Lundi',
  hours1: 'de 00:00 à 00:00',
  day2: 'Mardi',
  hours2: 'de 00:00 à 00:00',
  day3: 'Mercredi',
  hours3: 'de 00:00 à 00:00',
  day4: 'Jeudi',
  hours4: 'de 00:00 à 00:00',
  day5: 'Vendredi',
  hours5: 'de 00:00 à 00:00',
  day6: 'Samedi',
  hours6: 'de 00:00 à 00:00',
  day7: 'Dimanche',
  hours7: 'de 00:00 à 00:00',
};

export default withStyles(s)(TabDetailsShop);
