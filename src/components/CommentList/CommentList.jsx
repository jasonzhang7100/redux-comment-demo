import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../CommentItem/CommentItem';
import './CommentList.css';

class CommentList extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  };

  render() {
    const { comments, deleteComment } = this.props;
    const display = comments.length > 0 ? 'none' : 'block';
    return (
      <>
        <div className="list-title">Comment Reply</div>
        <h3 style={{ display }}>There is no comment left. Please add comments on the leftside.</h3>
        <ul>
          {
            comments.map((comment, index) => (
              <CommentItem comment={comment} key={index} index={index} deleteComment={deleteComment} />
            ))
          }
        </ul>
      </>
    );
  }
}

export default CommentList;
