import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserComments from './userComments';

class LeftFeed extends Component {


    


    render () {
        const {  } = this.props.comments.currentComments;
        console.log(this.props)
        return (
            <div className='leftFeedContainer'>
                <div className='userSplashContainer'>
                    <button className='userProfileCloseButton'>
                        <svg className='userCloseSVG' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon></svg>
                    </button>
                    <svg className='redditSplashSVG' viewBox="0 0 20 20">
                            <g>
                                <circle className='redditSplashCircle' fill="#185C94" cx="10" cy="10" r="10"></circle>
                                <path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path>
                            </g>
                    </svg>
                    <h1 className='splashH1'>Join the discussion</h1>
                    <Link className='splashSignUpLink' to={ '' }>Get started</Link>
                </div>
                <UserComments />
            </div>
        )
    }
}

export default LeftFeed;