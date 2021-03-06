import React, { Component } from 'react';

import '../../stylesheets/subvueditFeed.css';
import SubvueditHeader from './subvueditHeader';
import FilterContainer from '../Filter/filterContainer';
import SubvueditContent from './subvueditContent';
import { withRouter } from 'react-router-dom';

class SubvueditFeed extends Component {

    componentDidMount () {
        const subId = parseInt(this.props.match.params.id)
        this.props.fetchSubvueditPosts(subId);
        this.props.fetchSubvuedit(subId);
    }

    render () {
        const { sub_name } = this.props.posts.subvueditPosts.length ? this.props.posts.subvueditPosts[0] : ''
        console.log(this.props)
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

export default withRouter(SubvueditFeed);