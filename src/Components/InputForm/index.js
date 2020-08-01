import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from '../../Redux/contactOperations';
import Theme from '../Theme';
import selectors from '../../Redux/selectors';
import './style.scss';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    if (this.props.contacts.length === 0) {
      this.props.onGet();
    }
  }

  addContact = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          color: Theme[this.props.theme].fontColor,
          background: Theme[this.props.theme].bodybg,
        }}
      >
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact} className="contactFormEl">
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <label>Number:</label>
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleNumber}
          />
          <input
            type="submit"
            value="Add contact"
            className="contactFormEl__button"
          />
        </form>
        {this.props.loading && (
          <h3
            style={{
              width: 400,
              textAlign: 'center',
              color: Theme[this.props.theme].fontColor,
              background: Theme[this.props.theme].bodybg,
            }}
          >
            Loading....
          </h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: selectors.getContacts(state),
    filter: selectors.getFilter(state),
    theme: selectors.getTheme(state),
  };
};
const mapDispatchToProps = {
  onAdd: contactOperations.contactAdd,
  onGet: contactOperations.contactGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
