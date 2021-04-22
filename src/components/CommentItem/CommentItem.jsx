import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import './CommentItem.css';

class CommentItem extends React.Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired
  };

  handleDelete = () => {
    const { comment, index, deleteComment } = this.props;
    if (window.confirm(`Are you sure to delete ${comment.user}'s comment?`)) {
      deleteComment(index);
    }
  };

  render() {
    const { comment } = this.props;
    return (
      <li className="comment-item">
        <span className="item-user">{comment.user} said:</span>
        <Button onClick={this.handleDelete}>Delete</Button>
        <p>{comment.content}</p>
      </li>
    );
  }
}

export default CommentItem;
