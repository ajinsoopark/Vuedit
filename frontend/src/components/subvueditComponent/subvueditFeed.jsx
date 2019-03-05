import React, { Component } from 'react';

import '../../stylesheets/subvueditFeed.css';
import SubvueditHeader from './subvueditHeader';
import FilterContainer from '../filterComponent/filterContainer';
import SubvueditContent from './subvueditContent';


class SubvueditFeed extends Component {

    componentDidMount () {
        const subId = parseInt(this.props.match.params.id)
        this.props.fetchSubvueditPosts(subId);
        this.props.fetchSubvuedit(subId);
    }

    render () {
        const { sub_name } = this.props.posts.subvueditPosts.length ? this.props.posts.subvueditPosts[0] : ''

        return (
            <div className='subvueditContainerOuter'>
                <div className='subvueditDivContainer'>
                    <div className='subvuedit'>
                        <SubvueditHeader 
                         subId={this.props.match.params.id}
                         subName={sub_name}/>
                        <FilterContainer class={'viewAndSortSub'}/>
                        <SubvueditContent 
                        posts={this.props.posts.subvueditPosts}
                        subInfo={this.props.subvuedits}
                        />     
                    </div>
                </div>
            </div>
        )
    }
}

export default SubvueditFeed;