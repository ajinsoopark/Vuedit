import React from 'react';

const Advertisement = ({...props}) => {
    return (
        <div className={props.feed}>
            <div className='adContainer'>
                <img alt='' className='adImage' src='https://i.imgur.com/LocDDRJ.png'/>
            </div>
        </div>
    )
}

export default Advertisement;