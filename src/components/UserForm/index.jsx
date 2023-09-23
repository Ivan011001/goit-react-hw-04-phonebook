import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Input } from 'components/BaseStyles.styled';
import { Form } from './UserForm.styled';

export default class UserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };

  onHandleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = evt => {
    const { onSubmit } = this.props;
    evt.preventDefault();
    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onHandleSubmit}>
        <label>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(['\s\-a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onHandleChange}
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
            onChange={this.onHandleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
