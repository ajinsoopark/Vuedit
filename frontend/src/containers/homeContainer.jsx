import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../reduxUtils';
import PostsFeed from '../components/postsComponent/PostFeed';

class HomeContainer extends Component {

    componentDidMount () {
        this.fetchPosts();
    }

    fetchPosts = () => {
        if (!this.props.posts.length) {
            axios
            .get('/posts')
            .then(res => {
                let posts = res.data.data;
                this.props.addPost(posts)

            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render () {
        const { posts } =  this.props;
        console.log(this.props)
        return (
            <PostsFeed 
            posts={ posts }/>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);