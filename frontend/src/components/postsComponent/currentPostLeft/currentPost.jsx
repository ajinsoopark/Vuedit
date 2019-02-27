import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../../stylesheets/currentPost.css';
import CurrentPostHeader from './currentPostHeader';
import CurrentPostLeftContainer from './currentPostLeftContainer';

class CurrentPost extends Component {

    componentDidMount () {
        let postId = parseInt(this.props.match.params.id)
        this.props.fetchPost(postId);
    }

    render () {
        console.log(this.props.posts)

        return (
            <div className='currentPostContainer'>
                <CurrentPostHeader
                postInfo={ this.props.posts.currentPost }
                />
                <div className='currentPostMain'>
                    <div className='mainContainer'>
                        <div className='main'>
                            <CurrentPostLeftContainer />
                            <div className='mainRightContainer'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentPost;