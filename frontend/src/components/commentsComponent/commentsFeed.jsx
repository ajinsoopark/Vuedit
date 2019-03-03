import React, { Component } from 'react';
import { withRouter } from 'react-router';

import '../../stylesheets/comments.css';
import CommentSection from './commentSection';

class CommentFeed extends Component {

    componentDidMount () {
        let postId = parseInt(this.props.match.params.id);
        this.props.fetchPostComments(postId);
    }

    nestComments = (commentArr) => {
        if (commentArr) {
            const commentTree = {};

            commentArr.forEach(commentObj => {
                commentTree[commentObj.id] = commentObj;
                commentTree[commentObj.id]['children'] = [];
            });
            commentArr.forEach(commentObj => {
                if (commentObj.comment_id !== null) {
                    const parent = commentTree[commentObj.comment_id]
                    parent.children = [...parent.children, commentObj]
                }
            });
            return commentArr.filter(comment => {
                return comment.comment_id === null
            })
        }
    }

    displayAllComments = (commentsArr) => {
      return  commentsArr.map(parentComment => {
          return (
              <CommentSection 
              key={parentComment.id}
              comment={parentComment}
              />
          )
      })
    }


    render () {

        return (
            <div className='commentSectionContainer'>
                <div className='commentSectionDiv'>
                    <div className='commentSectionFeedDiv'>
                        <div className='firstCommentDiv'>
                            <div className='commentLeftLineDiv'>
                                <div className='leftLineDiv'>
                                    <div className='lineIconDiv'>
                                        <i className='lineIcon'/>
                                    </div>
                                </div>
                            </div>
                            { this.displayAllComments(this.nestComments(this.props.comments.currentComments)) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CommentFeed);