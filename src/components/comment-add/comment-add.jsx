import React from 'react'
import { Input, Button } from 'antd'
import PropTypes from 'prop-types'

import './comment-add.css'

const { TextArea } = Input

class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: '', content: '' }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.addComment = this.addComment.bind(this)
  }

  addComment() {
    const comment = this.state
    if (!(comment.user && comment.content)) { return }
    this.props.changeComments(comment)
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
        <Button type="primary" onClick={this.addComment}>Add Comment</Button>
      </div>
    )
  }
}

AddComment.propTypes = {
  changeComments: PropTypes.func.isRequired
}

export default AddComment