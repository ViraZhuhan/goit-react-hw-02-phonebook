import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './ContactsTitle.styled';

class ContactsTitle extends Component {
  static defaultProps = {
    title: 'Contacts',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    title: this.props.title,
  };

  render() {
    return <Title>{this.state.title}</Title>;
  }
}

export default ContactsTitle;
