import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Input } from 'components/BaseStyles.styled';
import { Form } from './UserForm.styled';

export default function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <label>
        <p>Name</p>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(['\s\-a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        <p>Number</p>
        <Input
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Enter telephone number (e.g., 123-456-7890)"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
