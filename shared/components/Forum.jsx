'use strict';
import React, {Component, PropTypes as pt} from 'react';
const debug = require('debug')('Component:Forum');
debug();

export default class Forum extends Component {

  constructor(props) {
    super(props);
    this.state = props;
    this.state['posts'] = [
      {
        'votes':31,
        'answers':7,
        'author':'Sally Smith',
        'tags': ['macra','mips'],
        'date': new Date('2016-06-14'),
        'title':'What is the difference between MIPS and MACRA?',
      },
      {
        'votes':27,
        'answers':5,
        'author':'Doogie Howser',
        'tags': ['radiology','mips'],
        'date': new Date('2016-07-12'),
        'title':'How do radiologists get incentivized in MIPS?',
      },
      {
        'votes':22,
        'answers':4,
        'author':'Doogie Howser',
        'tags': ['tools','reporting','mips'],
        'date': new Date('2016-07-14'),
        'title': 'Is there MIPS a reporting site?'
      },
      {
        'votes':20,
        'answers':3,
        'author':'Doogie Howser',
        'tags': ['value-based-payment','mips'],
        'date': new Date('2016-07-02'),
        'title': 'What is value based payments?'
      },
      {
        'votes':14,
        'answers':3,
        'author':'Doogie Howser',
        'tags': ['reporting','tools','mips'],
        'date': new Date('2016-07-21'),
        'title': 'How do you report your results for MIPS?'
      },
      {
        'votes':10,
        'answers':2,
        'author':'Doogie Howser',
        'tags': ['reporting','mips'],
        'date': new Date('2016-07-31'),
        'title': 'Am I going to have to do more work to report to MIPS?'
      },
      {
        'votes':7,
        'answers':3,
        'author':'Doogie Howser',
        'tags': ['reimbursement','pay','mips'],
        'date': new Date('2016-07-14'),
        'title': 'Is this going to make my pay decrease?'
      },
      {
        'votes':6,
        'answers':2,
        'author':'Doogie Howser',
        'tags': ['qualification','apm','mips'],
        'date': new Date('2016-07-27'),
        'title': 'Who qualifies for MIPS vs APMs?'
      },
    ]
  }
  static displayName = 'Forum'

  render() {
    return (
      <div className="twelve columns">
        <h1>MIPS Forum</h1>
        <h3>Top Questions
          <h6>
            <a className="timeline-toc">Featured</a>
            <a className="timeline-toc">Unanswered</a>
            <a className="timeline-toc">Hot</a>
            <a className="timeline-toc">New</a>
          </h6>
        </h3>
        <div className="twelve columns">
          <table className="forumtable">
            {this.state.posts.map((post)=>
              <tr>
                <td className="forumpoints">
                  {post.votes}
                  <div className="label">Votes</div>
                </td>
                <td className="forumpoints">
                  {post.answers}
                  <div className="label">Answers</div>
                </td>
                <td>
                  <h6><a>{post.title}</a></h6>
                  {post.tags.map((tag)=>
                    <span className="tag">{'#'+tag}</span>
                  )}
                  <span className="author">{' on ' + post.date.toLocaleDateString() + ' by '}<a className='ill'>{post.author}</a></span>
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
}
