'use strict';

import React, {Component, PropTypes as pt} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import {autoBindAll} from '../../utils';
const debug = require('debug')('Component:Nav');
debug();

export default class Nav extends Component {

  constructor(props) {
    super(props);
    autoBindAll.call(this, [
      'mouseOverLink',
      'mouseOut'
    ]);
    this.state = {
      isHovering: false
    };
  }

  static displayName = 'Nav'

  static contextTypes = {
    router: pt.func.isRequired,
    getStore: pt.func.isRequired,
    executeAction: pt.func.isRequired
  }

  static propTypes = {
    loggedIn: pt.bool,
    userLevel: pt.number
  }

  mouseOverLink(e) {
    e.target.classList.add('hovering');
    this.setState({
      isHovering: true
    });
  }

  mouseOut(e) {
    e.target.classList.remove('hovering');
    this.setState({
      isHovering: false
    });
  }

  render() {
    const classes = classnames({
      'is-hovered': this.state.isHovering
    });
    const loggedInLinks =
    (
      <li>
        <Link
          onMouseOver={this.mouseOverLink}
          onMouseOut={this.mouseOut}
          to='/dashboard'>Dashboard
        </Link>
      </li>
    );
    const adminLink = (
      <li>
        <Link
          onMouseOver={this.mouseOverLink}
          onMouseOut={this.mouseOut}
          to='admin'>Admin
        </Link>
      </li>
    );

    // {this.props.loggedIn && loggedInLinks}
    // {this.props.userLevel > 1 && adminLink}
    return (
      <div>
        <div className="main-nav">
          <ul className={classes}>
            <li style={{width:"100%"}}>
              <Link
                style={{"font-size":"3rem"}}
                onMouseOver={this.mouseOverLink}
                onMouseOut={this.mouseOut}
                to='/'>MIPS Med
              </Link>
            </li>
            <li style={{width:"100%", 'vertical-align':'middle'}}>
              <input
                placeholder='search' />
            </li>
          </ul>
        </div>
        <div className="main-nav">
          <ul className={classes}>
            <li>
              <Link
                onMouseOver={this.mouseOverLink}
                onMouseOut={this.mouseOut}
                to='/rule'>Rule
              </Link>
            </li>
            <li>
              <Link
                onMouseOver={this.mouseOverLink}
                onMouseOut={this.mouseOut}
                to='/timeline'>Timeline
              </Link>
            </li>
            <li>
              <Link
                onMouseOver={this.mouseOverLink}
                onMouseOut={this.mouseOut}
                to='/forum'>Forum
              </Link>
            </li>
            <li>
              <Link
                onMouseOver={this.mouseOverLink}
                onMouseOut={this.mouseOut}
                to='/tools'>Tools
              </Link>
            </li>
            {!this.props.loggedIn &&
              <li>
                <Link
                  onMouseOver={this.mouseOverLink}
                  onMouseOut={this.mouseOut}
                  to='signin'>SignIn
                </Link>
              </li>
            }

          </ul>
        </div>
      </div>
    );
  }
}
