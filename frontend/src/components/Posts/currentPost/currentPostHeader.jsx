import React, { Component } from 'react';

class CurrentPostHeader extends Component {

    render () {
        const { vote_sum, title } = this.props.postInfo ? this.props.postInfo : ''
       
        return (
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
                                    { vote_sum ? vote_sum : 0 }
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
                                </div>
                            </div>
                        </div>
                        <div className='closeHeaderDiv'>
                            <button className='closeButton'>
                                <svg className='closeSVG' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon></svg>
                                <span className='closeSpan'>Close</span>
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CurrentPostHeader