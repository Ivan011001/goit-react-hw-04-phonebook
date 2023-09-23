import PropTypes from 'prop-types';
import { Input } from 'components/BaseStyles.styled';

export default function Filter({ filter, onChange }) {
  return <Input type="text" name="filter" value={filter} onChange={onChange} />;
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
