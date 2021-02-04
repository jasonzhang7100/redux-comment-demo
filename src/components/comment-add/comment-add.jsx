import React from 'react'
import { Input, Button } from 'antd'
import PropTypes from 'prop-types'

import './comment-add.css'

const { TextArea } = Input

class CommentAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: '', content: '' }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const comment = this.state
    if (!(comment.user && comment.content)) { return }
    this.props.addComment(comment)
    this.setState({ user: '', content: '' })
  }

  handleUserChange(event) {
    const user = event.target.value
    this.setState({ user })
  }

  handleContentChange(event) {
    const content = event.target.value
    this.setState({ content })
  }

  render() {
    const { user, content } = this.state
    return (
      <div>
        <div className="input-user">
          <Input
            value={user}
            onChange={this.handleUserChange}
            placeholder="Please input your name"
          />
        </div>
        <div className="input-content">
          <TextArea
            rows={10}
            value={content}
            onChange={this.handleContentChange}
            placeholder="Please input your comment"
          />
        </div>
        <Button type="primary" onClick={this.handleClick}>Add Comment</Button>
      </div>
    )
  }
}

CommentAdd.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default CommentAdd