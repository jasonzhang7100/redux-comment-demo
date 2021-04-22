import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddComment from '../components/AddComment/AddComment';
import CommentList from '../components/CommentList/CommentList';
import { addComment, deleteComment, getComments } from '../redux/actions';

class App extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  };

  // get initial comments asynchronously
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    const { comments, addComment, deleteComment } = this.props;
    return (
      <>
        <Row className="header">
          <Col span={24}>Redux Comment Demo</Col>
        </Row>
        <Row justify="center" className="comment-main">
          <Col className="comment-left" span={8}><AddComment addComment={addComment} /></Col>
          <Col className="comment-right" span={15}><CommentList comments={comments} deleteComment={deleteComment} /></Col>
        </Row>
      </>
    );
  }
}

export default connect(
  state => ({ comments: state.comments }),
  { addComment, deleteComment, getComments }
)(App);
