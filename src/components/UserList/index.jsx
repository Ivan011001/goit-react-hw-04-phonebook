import PropTypes from 'prop-types';
import { Component } from 'react';
import UserListItem from './UserListItem';
import { ContactList } from './UserList.styled';

export default class UserList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ContactList>
        {contacts.map(contact => (
          <UserListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ContactList>
    );
  }
}
