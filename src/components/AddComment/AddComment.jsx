import React from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';

import './AddComment.css';

const { TextArea } = Input;

class AddComment extends React.Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  };

  // its own state itself which is not managed by Redux
  state = {
    user: '',
    content: ''
  };

  handleClick = () => {
    const comment = this.state;
    if (!(comment.user && comment.content)) {
      return;
    }
    this.props.addComment(comment);
    this.setState(
      {
        user: '',
        content: ''
      }
    );
  };

  handleUserChange = e => {
    const user = e.target.value;
    this.setState({ user });
  };

  handleContentChange = e => {
    const content = e.target.value;
    this.setState({ content });
  };

  render() {
    const { user, content } = this.state;
    return (
      <>
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
      </>
    );
  }
}

export default AddComment;
