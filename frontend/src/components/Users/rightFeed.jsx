import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RightFeed extends Component {

    createCakeDay = (createdTime) => {
        if (createdTime) {
            const joinDate = Date(createdTime);
            console.log(joinDate);
            const cakeDay = joinDate.slice(4, 11) + ', ' + joinDate.slice(11, 15);
            return cakeDay;
        }
    }

    render () {
        const { id, username, avatar, email, created_at } = this.props.currentViewingProfile ? this.props.currentViewingProfile : '';
        return (
            <div className='rightFeedContainer'>
                <div className='rightFeedUserProfile'>
                    <div className='userProfileContent'>
                        <div className='userProfileSplash'></div>
                        <div className='userProfileAvatarContainer'>
                            <img className='userProfileAvatar' src={avatar} alt=''/>
                        </div>
                        <Link className='profileUserLink' to={ `/user/${id}` }>
                            { `u/${username}` }
                        </Link>
                        <div className='emailCakeDay'>
                            <div className='userEmail'>
                                <h5 className='h5Email'>Email</h5>
                                <div className='emailAdd'>
                                    <svg className='emailSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
                                    <span className='email'>{ email }</span>
                                </div>
                            </div>
                            <div className='userCakeDay'>
                                <h5 className='h5CakeDay'>Cake Day</h5>
                                <div className='signUpDate'>
                                    <svg className='cakeSVG' viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><g><path d="M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"></path><path d="M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"></path><path d="M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"></path><path d="M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"></path></g></g></svg>
                                    <span className='cakeDay'>{this.createCakeDay(created_at)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightFeed;

