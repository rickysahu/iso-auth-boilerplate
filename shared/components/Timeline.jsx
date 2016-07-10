'use strict';
import React from 'react';
const debug = require('debug')('Component:Timeline');
debug();

export default class Timeline extends React.Component {

  static displayName = 'Timeline'

  render() {
    return (
      <div>
        <div className="twelve columns">
          <h1>MIPS Timeline</h1>
          <p>Based on your results from the <a>MIPS Qualification Test</a> this page has been personalized to highlight relevant information.</p>
          To change the personalized highlights:<br></br> <button>Update the test</button>&nbsp;&nbsp;or&nbsp;&nbsp;<button>Select a filter ▼ </button>
        </div>
        <div className="twelve columns">
          <h3>Jump to a section</h3>
          <h6>
            <a className="timeline-toc">Before MACRA</a>
            <a className="timeline-toc">2015</a>
            <a className="timeline-toc">2016</a>
            <a className="timeline-toc">2017</a>
            <a className="timeline-toc">2018</a>
            <a className="timeline-toc">2019</a>
            <a className="timeline-toc">2020</a>
            <a className="timeline-toc">2021</a>
            <a className="timeline-toc">2022</a>
            <a className="timeline-toc">2023</a>
            <a className="timeline-toc">2024</a>
            <a className="timeline-toc">2025</a>
            <a className="timeline-toc">2026 & beyond</a>
          </h6>
        </div>
        <div className="twelve columns">
          <h3>Before <a className="ill">MACRA</a> & <a className="ill">MIPS</a></h3>
          <h3>2015</h3>
          <h3>2016</h3>
          <h3>2017</h3>
          <h3>2018</h3>
          <h3>2019</h3>
          <h3>2020</h3>
          <h3>2021</h3>
          <h3>2022</h3>
          <div className="tile r1">
            <h6>Payment Adjustment</h6>
            The payment adjustment levels out at +- 9%
          </div>
          <h3>2023</h3>
          <h3>2024</h3>
          <h3>2025</h3>
          <h3>2026 and beyond</h3>
          <p>This is a timeline of the site.</p>
        </div>
      </div>
    );
  }
}
