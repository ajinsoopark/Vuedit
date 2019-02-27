import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

import '../../stylesheets/currentPost.css';

class CurrentPost extends Component {

    componentDidMount () {
        let postId = parseInt(this.props.match.params.id)
        this.props.fetchPost(postId);
    }

    render () {
        console.log(this.props)
        const { id, comment_count, body, title, created_at, username, sub_name, vote_sum } = this.props.posts[0] ? this.props.posts[0] : '';
        return (
            <div className='currentPostContainer'>
                <div className='headerBar'>
                    <div className='headerBarInfo'>
                        <div className='titleAndVoting'>
                            <div className='headerVoting'>
                                <button className='upVoteButtonHeader voteButton'>
                                    <div className='SVGDiv'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='upSVG' viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                                    </div>
                                </button>
                                <div className='voteSumHeader'>
                                    { vote_sum }
                                </div>
                                <button className='downVoteButton voteButton'>
                                    <div className='SVGDiv'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='downSVG' viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                                    </div>
                                </button>
                                <svg className='titleSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z"/></svg>
                                <div className='titleHeaderDiv'>
                                    <span className='titleHeaderSpan'>
                                        <h2 className='titleHeader'>
                                            { title }
                                        </h2>
                                    </span>
                                <div className='spacingDivOne'></div>
                                <div className='spacingDivTwo'></div>
                                </div>
                                <div className='closeHeaderDiv'>
                                    <button className='closeButton'>
                                        <svg className='closeSVG' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon></svg>
                                        <span className='closeSpan'>Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='currentPostMain'>
                    <div className='mainContainer'>
                        <div className='main'>
                            <div className='mainLeftContainer'>
                                <div className='mainLeft'>
                                    <div className='joinSplashDiv'>
                                        <button className='splashCloseButton'>
                                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
                                            </svg>
                                        </button>
                                        <div className='splashContent'>
                                        <svg className='homeSvg' viewBox="0 0 20 20">
                                            <g>
                                                <circle className='homeLogo' fill="black" cx="10" cy="10" r="10"></circle>
                                                <path fill="white" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path>
                                            </g>
                                        </svg>
                                        </div>
                                    </div>
                                    <div className='postContentDiv'>
                                    </div>
                                    <div className='signUpContainer'>
                                    </div>
                                </div>
                            </div>
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