import { nanoid } from 'nanoid';
import { Component } from 'react';
import Section from '../Section';
import UserForm from '../UserForm';
import Filter from '../Filter';
import UserList from '../UserList';

import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const isUserExists = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isUserExists) return alert(`${name} is already in contacts`);

    this.setState(prevState => ({
      contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
    }));
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <AppContainer>
        <Section title="Phonebook">
          <UserForm onSubmit={this.onFormSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length !== 0 ? (
            <>
              <Filter filter={filter} onChange={this.onFilterChange} />
              <UserList
                contacts={filteredContacts}
                onDelete={this.onContactDelete}
              />
            </>
          ) : (
            <p>You have no contacts yet...</p>
          )}
        </Section>
      </AppContainer>
    );
  }
}
