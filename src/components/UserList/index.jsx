import PropTypes from 'prop-types';
import UserListItem from './UserListItem';
import { ContactList } from './UserList.styled';

export default function UserList({ contacts, onDelete }) {
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

UserList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
