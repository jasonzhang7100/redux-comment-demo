import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-types';

export const addComment = comment => ({ type: ADD_COMMENT, data: comment });
export const deleteComment = index => ({ type: DELETE_COMMENT, data: index });

// use setTimeout to simulate getting data asynchronously from the backend
const receiveComments = comments => ({ type: RECEIVE_COMMENTS, data: comments });
export const getComments = () => {
  return (
    dispatch => {
      setTimeout(() => {
        const comments = [
          { user: 'Jason', content: 'Hello World!' },
          { user: 'Joey', content: 'How are you?' }
        ];
        // dispatch a synchronous actionÏ when time is out
        dispatch(receiveComments(comments));
      }, 1500)
    }
  );
};
