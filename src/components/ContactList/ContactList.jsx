import { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
  };

  state = {
    contacts: this.props.contacts,
  };

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <List>
        {contacts.map(({ name, number, id }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        ))}
      </List>
    );
  }
}

export default ContactsList;
