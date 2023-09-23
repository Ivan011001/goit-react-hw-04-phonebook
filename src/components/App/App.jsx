import { nanoid } from 'nanoid';
import { useState, useEffect, useRef } from 'react';
import Section from '../Section';
import UserForm from '../UserForm';
import Filter from '../Filter';
import UserList from '../UserList';

import { AppContainer } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const mount = useRef(true);

  useEffect(() => {
    if (mount.current) {
      mount.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const isUserExists = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isUserExists) return alert(`${name} is already in contacts`);

    setContacts(prev => [{ name, number, id: nanoid() }, ...prev]);
  };

  const onContactDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <AppContainer>
      <Section title="Phonebook">
        <UserForm onSubmit={onFormSubmit} />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 ? (
          <>
            <Filter filter={filter} onChange={e => setFilter(e.target.value)} />
            <UserList contacts={filteredContacts} onDelete={onContactDelete} />
          </>
        ) : (
          <p>You have no contacts yet...</p>
        )}
      </Section>
    </AppContainer>
  );
}
