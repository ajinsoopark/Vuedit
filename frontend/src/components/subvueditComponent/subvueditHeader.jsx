import React from 'react';
import { Link } from 'react-router-dom';

const SubvueditHeader = ({...props}) => {
    return (
        <div className='subvueditHeader'>
            <Link className='subvueditHeaderLink' to={ `/subvuedits/${parseInt(props.subId)}` }>
                <div className='subvueditSplash'>
                    <div className='subvueditNameDiv'>
                        <div className='subSplashIcon'>
                        </div>
                        <span className='subSplashSpan'>
                            <h1 className='subSplashName'>
                                
                            </h1>
                        </span>
                    </div>
                    <div className='subSplashStyleDiv'></div>
                </div>
            </Link>
            <div className='contentTypeContainer'>

            </div>
        </div>
    )
}

export default SubvueditHeader;