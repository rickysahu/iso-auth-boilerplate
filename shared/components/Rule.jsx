'use strict';
import React from 'react';
const debug = require('debug')('Component:Rule');
debug();

export default class Rule extends React.Component {

  static displayName = 'Rule'

  render() {
    return (
      <p>This is a rule of the site.</p>
    );
  }
}
