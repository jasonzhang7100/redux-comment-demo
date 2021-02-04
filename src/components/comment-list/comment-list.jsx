import React from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './comment-list.css'

class CommentList extends React.Component {
  render() {
    const { comments, deleteComment } = this.props
    const display = comments.length > 0 ? 'none' : 'block'

    return (
      <div>
        <div className="comment-title">Comment Reply</div>
        <h3 style={{ display: display }}>There is no comment left. Please add comment on the leftside.</h3>
        <ul>
          {
            comments.map((comment, index) => {
              return <CommentItem comment={comment} key={index} index={index} deleteComment={deleteComment} />
            })
          }
        </ul>
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentList