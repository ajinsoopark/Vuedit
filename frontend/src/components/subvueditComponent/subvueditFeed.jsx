import React, { Component } from 'react';

import '../../stylesheets/subvueditFeed.css';
import SubvueditHeader from './subvueditHeader';
import FilterContainer from '../filterComponent/filterContainer';

class SubvueditFeed extends Component {

    componentDidMount () {
        const subId = parseInt(this.props.match.params.id)
        this.props.fetchSubvueditPosts(subId)
    }

    render () {
        const { sub_name } = this.props.posts.subvueditPosts.length ? this.props.posts.subvueditPosts[0] : ''
        console.log(this.props.posts.subvueditPosts[0])
        return (
            <div className='subvueditContainer'>
                <div className='subvueditDivContainer'>
                    <div className='subvuedit'>
                        <SubvueditHeader 
                         subId={this.props.match.params.id}
                         subName={this.props.posts.subvueditPosts}/>
                        <FilterContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default SubvueditFeed;