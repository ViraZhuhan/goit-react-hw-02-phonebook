import { Component } from 'react';
import PropTypes from 'prop-types';
import { PhonebookTitle } from './Title.styled';

class Title extends Component {
  static defaultProps = {
    title: 'Phonebook',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    title: this.props.title,
  };

  render() {
    return <PhonebookTitle>{this.state.title}</PhonebookTitle>;
  }
}

export default Title;
