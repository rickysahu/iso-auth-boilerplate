'use strict';
import React, {Component, PropTypes as pt} from 'react';
import DocumentTitle from 'react-document-title';
const debug = require('debug')('Component:Home');
debug();


export default class Home extends Component {
  static displayName = 'Home'

  static propTypes = {
    email: pt.string,
    userLevel: pt.number,
    loggedIn: pt.bool
  }
  // <div><!--<h1>Hello,&nbsp;{this.props.email || 'Stranger'}</h1>--></div>

  render() {
    return (
      <DocumentTitle title="Home | Isomorphic auth app">
        <div className="hello">
          <h1>MIPS Med</h1>
          <h4>CMS Merit-Based Incentive Payment System (MIPS) information and guidance for healthcare professionals.</h4>
          <div className="twelve columns">
            <div className="six columns">
              <h3>What is MIPS?</h3>
              <img className="home" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/heart-favourite-icon.png" />
              <p><a className="ill">MIPS</a> is a new Medicare value-based payment policy that combines parts of the <a className="ill">Physician Quality Reporting System</a>, the <a className="ill">Value Modifier</a>, and the <a className="ill">Medicare Electronic Health Record incentive program</a> into one single program in which <a className="ill">Eligible Professionals</a> will be measured on:
                <ul>
                  <li><a>Quality</a></li>
                  <li><a>Resource use</a></li>
                  <li><a>Clinical practice improvement</a></li>
                  <li><a>Meaningful use of certified EHR technology</a></li>
                </ul>
              </p>
              <button>Read about the MIPS Rule</button>
              <br></br><br></br>
              <h3>MIPS Timeline</h3>
              <img className="home" src="https://cdn3.iconfinder.com/data/icons/round-flat-pink-vol-2/354/Timeline_Flowchart_Graph_Diagram_Flowsheet_Chart_Draft-512.png"/>
              <p>
                MIPS will be rolled out over time starting in 2017 and includes many details from the proposal. Check out the <a className="ill">timeline</a> and the <a className="ill">rule</a>.
              </p>
              <button>View the MIPS timeline</button>
            </div>
            <div className="six columns">
              <h3>Know your MIPS status. Get Tested!</h3>
              <img className="home" src="http://orig08.deviantart.net/705e/f/2015/321/f/a/test_tube_free_flat_vector_icon_by_superawesomevectors-d9h0q6d.jpg"/>
              <p>Take a quick test that will tell you how you will be affected by the changes proposed by <a className="ill">MACRA</a> and <a className="ill">MIPS</a></p>
              <button>Take the test</button>
              <br></br><br></br>
              <h3>Have questions? Ask the community!</h3>
              <img className="home" src="http://actionforindia.org/wp-content/uploads/2013/03/people-icon.png"/>
              <p>We know this can be complicated. You can ask and answer questions in our community forum where the best answers rise to the top.</p>
              <button>See what users are asking</button>
            </div>
          </div>
          {this.props.loggedIn &&
            <h3>Your user level is {this.props.userLevel}</h3>
          }
        </div>
      </DocumentTitle>
    );
  }
}
