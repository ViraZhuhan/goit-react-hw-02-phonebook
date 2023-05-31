import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Label, Input} from './Filter.styled'

class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    const { onChange, value } = this.props;

    return (
      <>
        <Label>Find contacts by name</Label>
        <Input type="text" name="filter" onChange={onChange} value={value} />
      </>
    );
  }
}

export default Filter;
