import React, { Component } from 'react';

class UserProfileSortBar extends Component {

    render () {
        return (
            <div className='userSortBarContainer'>
                <div className='userBarSortContent'>
                    <div className='sortBar'>
                        <div className='sortDiv'>
                            <div className='sortText'>Sort</div>
                            <div className='currentSortOptionContainer'>
                                <select className='sortOptionMenu'>
                                    <option className='sortDefault' value=''>Sort by...</option>
                                    <option className='sortNew' value='new'>New</option>
                                    <option className='sortHot' value='hot'>Hot</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileSortBar