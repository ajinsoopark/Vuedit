import React from 'react';

const ViewOptions = () => {
    return (
        <div className='viewOptions'>
            <div className='viewText'>View</div>
                <button className='cardButton' title='card'>
                    <svg className='cardSvg' viewBox="0 0 20 20">
                        <path fill='inherit' d="M1.75,9.375 L1.75,1.75 L18.25,1.75 L18.25,9.375 L1.75,9.375 Z M1.75,18.25 L1.75,10.625 L18.25,10.625 L18.25,18.25 L1.75,18.25 Z"/>
                    </svg>
                </button>
            <button className='classicButton' title="classic">
                <svg viewBox="0 0 20 20"  className="classicSvg">
                    <path fill="inherit" d="M1.75,6.60294118 L1.75,1.75 L18.25,1.75 L18.25,6.60294118 L1.75,6.60294118 Z M1.75,12.4264706 L1.75,7.57352941 L18.25,7.57352941 L18.25,12.4264706 L1.75,12.4264706 Z M1.75,18.25 L1.75,13.3970588 L18.25,13.3970588 L18.25,18.25 L1.75,18.25 Z">
                    </path>
                </svg>
            </button>
            <button className="compactButton" title="compact">
                <svg viewBox="0 0 20 20" className="compactSvg">
                    <path fill="inherit" d="M1.75,4.95149254 L1.75,1.75 L18.25,1.75 L18.25,4.95149254 L1.75,4.95149254 Z M1.75,9.38432836 L1.75,6.18283582 L18.25,6.18283582 L18.25,9.38432836 L1.75,9.38432836 Z M1.75,18.25 L1.75,15.0485075 L18.25,15.0485075 L18.25,18.25 L1.75,18.25 Z M1.75,13.8171642 L1.75,10.6156716 L18.25,10.6156716 L18.25,13.8171642 L1.75,13.8171642 Z">
                    </path>
                </svg>
            </button>
        </div>
    )
}

export default ViewOptions;