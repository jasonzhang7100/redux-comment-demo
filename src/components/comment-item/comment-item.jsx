import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import './comment-item.css'

class CommentItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    const { comment, index, deleteComments } = this.props
    if (window.confirm(`Are you sure to delete ${comment.user}'s comment?`)) {
      deleteComments(index)
    }
  }

  render() {
    const { comment } = this.props
    return (
      <li className="comment-item">
        <span className="comment-item-user">{comment.user} said:</span>
        <Button onClick={this.handleDelete}>Delete</Button>
        <p>{comment.content}</p>
      </li>
    )
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteComments: PropTypes.func.isRequired
}

export default CommentItem