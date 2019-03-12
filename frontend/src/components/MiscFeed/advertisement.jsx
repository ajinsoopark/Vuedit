import React from 'react';

const Advertisement = ({...props}) => {
    
    if (props.subPage) {
        return (
            <div className={props.feed}>
                <div className='adContainer'>
                    Advertisement
                    <div className='adImgDiv'>
                        <img className='adImage' alt='' src="https://i.imgur.com/9dTTAAT.png" title="source: imgur.com" />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={props.feed}>
                <div className='adContainer'>
                    Advertisement
                    <div className='adImgDiv'>
                        <img alt='' className='adImage' src='https://i.imgur.com/LocDDRJ.png'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advertisement;