import React from 'react'
import { Row, Col } from 'antd'

import AddComment from './components/comment-add/comment-add'
import CommentList from './components/comment-list/comment-list'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
    this.changeComments = this.changeComments.bind(this)
    this.deleteComments = this.deleteComments.bind(this)
  }

  changeComments(comment) {
    const { comments } = this.state
    comments.unshift(comment)
    this.setState({ comments })
  }

  deleteComments(index) {
    const { comments } = this.state
    comments.splice(index, 1)
    this.setState({ comments })
  }

  render() {
    return (
      <>
        <Row className="header">
          <Col span={24}>React Comment Demo</Col>
        </Row>
        <Row justify="center" className="comment-main">
          <Col className="comment-left" span={8}><AddComment changeComments={this.changeComments} /></Col>
          <Col className="comment-right" span={15}><CommentList comments={this.state.comments} deleteComments={this.deleteComments} /></Col>
        </Row>
      </>
    );
  };
};

export default App;
