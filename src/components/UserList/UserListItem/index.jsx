import { Button } from 'components/BaseStyles.styled';

export default function UserListItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <Button $primary={true} onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  );
}
