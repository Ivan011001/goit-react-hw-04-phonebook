import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
